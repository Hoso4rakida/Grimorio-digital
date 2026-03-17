import { useEffect, useRef, useState } from "react";

interface LoginProps {
  isActive: boolean;
  onClose: () => void;
}

const tempLoginData = {
  username: "user123",
  password: "password123",
};

function Login({ isActive, onClose }: LoginProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isFalhou, setIsFalhou] = useState(false);

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

  // FUNÇÃO PARA PEGAR OS VALORES
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Evita o reload da página

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Validação simples com dados temporários
    if (data.username === tempLoginData.username && data.password === tempLoginData.password) {
      console.log("Sucesso! Salvando no cache...");
      localStorage.setItem('loged', JSON.stringify({ ...data, lastLogin: new Date() }));
      setIsFalhou(false);
      onClose(); // Fecha o modal
    } else {
      setIsFalhou(true);
    }
  }

  function fecharNoCliqueFora(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) {
      onClose();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onClick={fecharNoCliqueFora}
      onClose={onClose} 
      className="backdrop:bg-black/80 bg-transparent p-0 m-auto outline-none" 
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg flex flex-col gap-4 border-deep-space-blue-700 border-3 w-lg shadow-2xl"
      >
        <h2 className="text-2xl font-bold uppercase text-slate-800">Entrar no Grimório</h2>
        
        {isFalhou && (
          <p className="text-red-500 text-sm font-bold p-2 rounded">
            Login falhou. Verifique suas credenciais.
          </p>
        )}

        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-slate-500 uppercase">Usuário</label>
          <input 
            name="username" 
            type="text" 
            placeholder="Ex: user123" 
            className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500" 
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-slate-500 uppercase">Senha</label>
          <input 
            name="password" 
            type="password" 
            placeholder="••••••••" 
            className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500" 
            required
          />
        </div>
        
        <div className="flex gap-2 mt-2">
          <button
            type="submit"
            className="bg-frosted-blue-500 hover:bg-frosted-blue-600 text-white font-bold px-4 py-2 rounded-md transition-colors cursor-pointer w-full"
          >
            Entrar
          </button>
          <button type="button" onClick={onClose} className="text-slate-600 text-sm cursor-pointer hover:text-slate-800 px-2">
            Cancelar
          </button>
        </div>

        <div className="border-t border-slate-100 pt-4 mt-2">
            <p className="text-slate-500 text-sm text-center">
                Não tem uma conta? <button type="button" className="text-frosted-blue-500 font-bold hover:underline cursor-pointer">Cadastre-se</button>
            </p>
            {isFalhou && (
              <p className="text-center mt-2 text-sm">
                <button type="button" className="text-frosted-blue-500 hover:underline cursor-pointer">Esqueceu sua senha?</button>
              </p>
            )}
        </div>
      </form>
    </dialog>
  );
}

export default Login;