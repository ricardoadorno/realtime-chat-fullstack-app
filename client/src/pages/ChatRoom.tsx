import { useEffect, useState } from 'react';
import { socket } from '@/socket';
import AppHeader from '@/components/AppHeader';
import ChatDisplay from '@/components/ChatDisplay';
import ChatterList from '@/components/ChatterList';

export default function ChatRoom() {
    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(() => {
        const onConnect = () => setIsConnected(true);
        const onDisconnect = () => setIsConnected(false);

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
        };
    }, []);

    return (
        <>
            <AppHeader isConnected={isConnected} />

            <main className='grid grid-cols-12 gap-4 p-8'>

                <ChatDisplay />

                <ChatterList />
            </main>
        </>
    );
}
