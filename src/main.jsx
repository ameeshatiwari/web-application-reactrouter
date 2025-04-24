import { createRoot } from "react-dom/client";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage, { action as LoginAction } from "./routes/login.jsx";
import Dashboard from "./routes/dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    action: LoginAction,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <h1>404 - Page Not Found</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
