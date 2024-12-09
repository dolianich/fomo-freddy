import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import GamePage from './pages/GamePage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import TokenPage from './pages/TokenPage.tsx';
import FrensPage from './pages/FrensPage.tsx';
import NavMobile from './components/NavBar/NavMobile.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MemesPage from './pages/MemesPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/game',
    element: <GamePage />,
  },
  {
    path: '/token',
    element: <TokenPage />,
  },
  {
    path: '/memes',
    element: <MemesPage />,
  },
  {
    path: '/frens',
    element: <FrensPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavMobile />
    <RouterProvider router={router} />
  </StrictMode>
);
