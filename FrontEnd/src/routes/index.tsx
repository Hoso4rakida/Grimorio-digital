import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

import { AuthRoutes } from "./auth.routes.tsx";
import { AppRoutes } from "./app.routes.tsx";

import { useAuth } from "../hooks/auth.tsx";


export function Routes() {
  const [status, setStatus] = useState(1);//2 logado, 1 deslogado
  const { user }  = useAuth();

  useEffect(()=> {

    if (user) {
      setStatus(2)
    } else {
      setStatus(1)
    }
  }, [user]);

  return (
    <BrowserRouter>
        { status == 1 ? <AuthRoutes /> : <AppRoutes/>}
    </BrowserRouter>
  )
}//GERENCIADOR DE ROTAS