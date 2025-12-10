import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import App from './components/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'mini-app-1',
        // Lazy load Mini-App 1
        loader: () => import('mini-app-1/src/App'),
      },
      {
        path: 'mini-app-2',
        // Lazy load Mini-App 2
        loader: () => import('mini-app-2/src/App'),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}