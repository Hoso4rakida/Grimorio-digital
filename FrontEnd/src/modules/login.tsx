import { useEffect, useRef, useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import backend from "../services/backend";
import { useAuth } from "../hooks/auth";

import Swal from "sweetalert2";

interface LoginProps {
  isActive: boolean;
  onClose: () => void;
  onRegister: ()=> void
};



function Login({ isActive, onClose, onRegister }: LoginProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isFalhou, setIsFalhou] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { signIn } = useAuth();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isActive) {
      dialog.showModal();
    } else {
      dialog.close();
      setIsFalhou(false); // Limpa o erro ao fechar
    }
  }, [isActive]);


  async function handleLogin() {
    const dialog = dialogRef.current;

    if (!email.trim() || !password.trim()) return Swal.fire({
      toast: true,
      position: "top-end",
      target: dialog!,
      icon: "warning",
      title: "Preencha todos os dados",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
                                                            });

    setLoading(true);
    try {
     await signIn({email, password, target: dialog!})
    } catch(error: any) {
      console.log(error)
      setIsFalhou(true)
    } finally {
     setLoading(false)

    }
  };

  function fecharNoCliqueFora(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) {
      onClose();
    }
  }

  return (
    <dialog
    id="dialog-"
      ref={dialogRef}
      onClick={fecharNoCliqueFora}
      onClose={onClose} 
      className="backdrop:bg-black/80 bg-transparent p-0 m-auto outline-none" 
    >
      <div className="bg-white p-8 rounded-lg flex flex-col gap-4 border-deep-space-blue-700 border-3 w-lg shadow-2xl" >
        <h2 className="text-2xl font-bold uppercase text-slate-800">Entrar no Grimório</h2>

        <div className={`overflow-hidden -mt-2 transition-all duration-500 ease-in-out ${
          isFalhou ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <p className="flex text-red-500 text-sm font-bold p-2 rounded">
            Login falhou. Verifique suas credenciais.
          </p>
        </div>

      
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-slate-500 uppercase">Usuário</label>
          <input 
            name="email" 
            type="email" 
            value={email}
            placeholder="Ex: user123@gmail.com" 
            onChange={(e)=> {setEmail(e.target.value); setIsFalhou(false)}}
            onInput={(e: any)=> {setEmail(e.target.value); setIsFalhou(false)}}
            className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500" 
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-slate-500 uppercase">Senha</label>
          <div className="w-full relative flex items-center">
           <input 
            name="password" 
            value={password}
            placeholder="••••••••" 
            type={showPassword ? 'text' : 'password'}
            onChange={(e)=> {setPassword(e.target.value); setIsFalhou(false)}}
            onInput={(e: any)=> {setPassword(e.target.value); setIsFalhou(false)}}
            className="pr-15 w-full p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500" 
            required
          />
          {
            showPassword ?
            <FaEye className="absolute left-[90%] cursor-pointer" color="#41afbe" size={20} onClick={()=> setShowPassword(false)}/>
            :
            <FaEyeSlash className="absolute left-[90%] cursor-pointer" color="#41afbe" size={20} onClick={()=> setShowPassword(true)}/>
          }
          </div>
        </div>
        
        <div className="flex gap-2 mt-2">
          <button
            disabled={loading}
            onClick={()=> handleLogin()}
            className="disabled:cursor-not-allowed disabled:bg-frosted-blue-600 transition duration-300 ease-in-out select-none bg-frosted-blue-500 hover:bg-frosted-blue-600 text-white font-bold px-4 py-2 rounded-md transition-colors cursor-pointer w-full"
          >
            { loading ? 'Carregando...' : 'Entrar'}
          </button>
          <button type="button" onClick={onClose} className="text-slate-600 text-sm cursor-pointer hover:text-slate-800 px-2">
            Cancelar
          </button>
        </div>

        <div className="border-t border-slate-100 pt-4 mt-2">
            <p className="text-slate-500 text-sm text-center">
              Não tem uma conta? <strong
               onClick={()=> {onRegister(); onClose();}}
               className="text-frosted-blue-500 font-bold hover:underline cursor-pointer transition duration-300 ease-in-out" >Cadastre-se</strong>
            </p>

            <div className={`w-[100%] overflow-hidden transition-all duration-500 ease-in-out ${
             isFalhou ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
             }`}>
              <p className="text-center text-frosted-blue-500 transition duration-300 ease-in-out hover:underline cursor-pointer">
               Esqueceu sua senha?
              </p>
            </div>
            
        </div>
      </div>
    </dialog>
  );
}

export default Login;