/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Contact from "./routes/Contact.jsx";

// Página de erro
import ErrorPage from "./routes/ErrorPage.jsx";

// Configurando router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// Componente base
import Home from "./routes/Home.jsx";

// Rota dinâmica
import Product from "./routes/Product.jsx";

// Rota aninhada
import Info from "./routes/Info.jsx";

// Search
import Search from "./routes/Search.jsx";

// O createBrowserRouter() é usado para fazer a configuração das rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // Componente base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // Rota dinâmica
      {
        path: "products/:id",
        element: <Product />,
      },
      // rota aninhada
      {
        path: "products/:id/info",
        element: <Info />,
      },
      // search
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
