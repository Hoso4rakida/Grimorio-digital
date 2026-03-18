import { createContext, useContext, useState, useEffect } from "react";
import backend from '../services/backend';
import Swal from 'sweetalert2';

interface AuthProps {
  children: React.ReactNode;
}

interface LoginProps {
  email: string;
  password: string;
  target: any
}

interface User {
  usuario: any; // depois você pode tipar melhor
}

interface AuthContextData {
  user: User | null;
  signIn: (data: LoginProps) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProps) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const [data, setData] = useState<User | null>(null);

  async function signIn({ email, password, target }: LoginProps) {
    if (!email || !password) {
     Toast.fire({
        icon: "warning",
        title: "Informe o email/senha."
      });
      return 
    }

    try {
      const response = await backend.post("/auth/login", { email, password });
      const { usuario } = response.data;

      localStorage.setItem("@user", JSON.stringify(usuario));
      setData({ usuario });

    } catch (error: any) {
      console.error(error)
      if (error?.response) {
        Swal.fire({
         toast: true,
         position: "top-end",
         target, 
         icon: "error",
         title: error.response.data.erro,
         showConfirmButton: false,
         timer: 3000,
         timerProgressBar: true,
      });
      } else {
       Swal.fire({
        toast: true,
        position: "top-end",
        target, 
        icon: "error",
        title: "Erro do servidor",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      }
    }
  }

  function logout() {
    localStorage.removeItem("@user");
    setData(null);
  }

  useEffect(() => {
    const user = localStorage.getItem("@user");

    if (user) {
      setData({
        usuario: JSON.parse(user)
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, logout, user: data }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };