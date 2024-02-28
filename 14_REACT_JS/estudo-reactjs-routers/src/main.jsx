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

// O createBrowserRouter() é usado para fazer a configuração das rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
