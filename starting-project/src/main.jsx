import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './routes/Homepage'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { TransactionsTable, getTransactions } from "./routes/TransactionsTable";
import { RootLayout } from "./routes/RootLayout";
import {BuyOrSellModal, getStock} from "./routes/BuyOrSellModal";

import { action } from "./components/BuyOrSellCard.jsx";
import { CardBar, getAllStocks } from "./components/CardBar.jsx";

const router = createBrowserRouter([
    {path:'/', element: <RootLayout/>, children:[
            { path: '/', element: <Homepage/>,
                children:[
                    { path: '/', element: <CardBar/>, loader: getAllStocks},
                    { path: '/', element: <TransactionsTable/>, loader: getTransactions},
                    { path: '/buy/:id', element: <BuyOrSellModal/>, action:action, loader:getStock},
                ]},
            { path: '/transactions', element: <TransactionsTable />, loader: getTransactions },
        ]},
    { path: '/login', element: <h1>LOGIN PAGE</h1> },
    { path: '/sign_up', element: <h1>SIGN UP PAGE</h1> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
