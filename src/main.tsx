import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Root from './routes/root';
import Error from './routes/error';
import Home from './routes/home';

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <Error />,
    children: [{ path: '/', element: <Home /> }],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
