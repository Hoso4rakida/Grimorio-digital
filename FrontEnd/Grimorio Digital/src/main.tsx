import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; //CSS global
import Home from "./pages/Home.tsx"; //CSS por pagina
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, //pagina principal
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
