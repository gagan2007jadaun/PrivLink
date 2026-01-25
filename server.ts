import express, { Request, Response } from 'express';
import next from 'next';
import { Server, Socket } from "socket.io";
import { createServer } from 'http';
import { parse } from 'url';
import backendRoutes from './src/backend';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const expressApp = express();
    const server = createServer(expressApp);

    // Socket.io Setup
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

    // Middleware
    expressApp.use(express.json());

    // API Routes
    expressApp.use('/api', backendRoutes);

    // Next.js Handler (Catch-all)
    expressApp.all(/(.*)/, (req: Request, res: Response) => {
        const parsedUrl = parse(req.url, true);
        return handle(req, res, parsedUrl);
    });

    server.listen(port, () => {
        console.log(`> Ready on http://${hostname}:${port}`);
        console.log(`> Socket.io ready on /api/socket/io`);
    });
});
