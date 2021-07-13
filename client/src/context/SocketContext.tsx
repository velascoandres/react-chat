import { createContext, useContext, useEffect } from 'react';

import { Socket } from 'socket.io-client';
import { AuthContext } from '../auth/AuthContext';

import { useSocket } from '../hooks/useSocket';


export interface ISocketContext {

    socket: Socket | null;
    online: boolean;

}
const initialContext = {
    online: false,
} as ISocketContext;


export const SocketContext: React.Context<ISocketContext> = createContext(initialContext);



export const SocketProvider: React.FC<{ children: JSX.Element }> = ({ children }: { children: JSX.Element }) => {

    const { socket, online, disconnectSocket, connectSocket } = useSocket('http://localhost:3002/chat');
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        if (auth.logged) {
            connectSocket();
        }
    }, [auth, connectSocket]);

    useEffect(() => {
        if (!auth.logged) {
            disconnectSocket();
        }
    }, [auth, disconnectSocket])

    return (
        <SocketContext.Provider value={{ socket, online }}>
            {children}
        </SocketContext.Provider>
    );
}