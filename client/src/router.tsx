import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import ChatRoom from './pages/ChatRoom';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/chat",
        element: <ChatRoom />,
    }
]);

export default router;
