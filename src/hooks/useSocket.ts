import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export const useSocket = () => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        // Mock socket logic - does not attempt to connect to a real server
        console.log("Initializing mock socket");

        const mockSocket = {
            on: (event: string, callback: Function) => console.log(`Mock socket listening for: ${event}`),
            off: (event: string) => console.log(`Mock socket stopped listening for: ${event}`),
            emit: (event: string, data: any) => console.log(`Mock socket emitted: ${event}`, data),
            disconnect: () => console.log("Mock socket disconnected"),
        } as unknown as Socket;

        setSocket(mockSocket);
        setIsConnected(true);

        return () => {
            console.log("Cleaning up mock socket");
        };
    }, []);

    return { socket, isConnected };
};
