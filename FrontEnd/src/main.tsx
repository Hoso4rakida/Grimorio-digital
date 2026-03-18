import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { AuthProvider } from "./hooks/auth";
import { Routes } from './routes'//rotas do site
import "./styles.css"; //CSS global

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  </StrictMode>
);
