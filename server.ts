import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import next from 'next';
import { Server, Socket } from "socket.io";

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
        try {
            // Be sure to pass `true` as the second argument to `url.parse`.
            // This tells it to parse the query portion of the URL.
            const parsedUrl = parse(req.url!, true);
            const { pathname, query } = parsedUrl;

            await handle(req, res, parsedUrl);
        } catch (err) {
            console.error('Error occurred handling', req.url, err);
            res.statusCode = 500;
            res.end('internal server error');
        }
    });

    const io = new Server(server, {
        path: '/api/socket/io',
        addTrailingSlash: false,
    });

    io.on('connection', (socket: Socket) => {
        console.log('Socket connected:', socket.id);

        socket.on('join_chat', (roomId: string) => {
            socket.join(roomId);
            console.log(`User joined chat: ${roomId}`);
        });

        socket.on('send_message', (data: any) => {
            // Broadcast to specific room (excluding sender if needed, but usually include)
            // For now, we broadcast to everyone in room including sender for simplicity or sync
            if (data.chatId) {
                io.to(data.chatId).emit('receive_message', data);
            }
            console.log('Message relayed:', data.content);
        });

        socket.on('typing', (data: any) => {
            if (data.chatId) {
                socket.to(data.chatId).emit('typing', data);
            }
        });

        socket.on('disconnect', () => {
            console.log('Socket disconnected:', socket.id);
        });
    });

    server.listen(port, (err?: Error) => {
        if (err) throw err;
        console.log(`> Ready on http://${hostname}:${port}`);
        console.log(`> Socket.io ready on /api/socket/io`);
    });
});
