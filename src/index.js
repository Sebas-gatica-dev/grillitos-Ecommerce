import App from './App';
import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import "./index.css";
import PorDefecto from './components/PorDefecto';
import ProductPage from './components/ProductPage';


const router = createBrowserRouter([
  {
    path: "/",
    element:   <App />,
    children:[
      { index: true, element: <PorDefecto /> },
      {
        path: "productPage/:id",
        element: <ProductPage />,
      },
    ],
    errorElement: <ErrorPage />,

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);