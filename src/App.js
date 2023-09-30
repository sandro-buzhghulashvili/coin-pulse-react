import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage, { loader as binanceLoader } from './pages/Home';

import LayoutPage from './layouts/Layout';
import MarketPage from './pages/Market';
import CoinPage, { loader as coinLoader } from './pages/Coin';
import WhyChooseUsPage from './pages/WhyChooseUs';
import JoinPage from './pages/Join';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    id: 'binance-loader',
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    loader: binanceLoader,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'market', element: <MarketPage /> },
      { path: 'market/:id', element: <CoinPage />, loader: coinLoader },
      { path: 'why-choose-us', element: <WhyChooseUsPage /> },
      { path: 'join', element: <JoinPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
