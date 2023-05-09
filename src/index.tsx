import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Customers } from './pages/customers/Customers';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Help } from './pages/help/Help';
import { Income } from './pages/income/Income';
import { Product } from './pages/product/Product';
import { Promote } from './pages/promote/Promote';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/product', element: <Product /> },
      { path: '/customers', element: <Customers /> },
      { path: '/income', element: <Income /> },
      { path: '/promote', element: <Promote /> },
      { path: '/help', element: <Help /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
