import { useEffect, useRef } from "react";

interface RegisterProps {
  isOn: boolean;
  onClose: () => void;
  registred: () => void;
}

function Register({ isOn, onClose, registred }: RegisterProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOn) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOn]);

  function fecharNoCliqueFora(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) {
      onClose();
    }
  }

  return (
    <dialog
      className="backdrop:bg-slate/80 bg-transparent m-auto"
      ref={dialogRef}
      onClick={fecharNoCliqueFora}
      onClose={onClose}
    >
      <form className="bg-white p-8 rounded-lg flex flex-col gap-4 border-deep-space-blue-700 border-3 w-lg shadow-2xl">
        <h2 className="text-2xl font-bold uppercase text-slate-800">
          Registrando sua conta
        </h2>

        <div className="flex flex-col">
          <label className="text-xs font-bold text-slate-500 uppercase">
            Usuário
          </label>
          <input
            name="username"
            type="text"
            placeholder="Ex: user123"
            className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xs font-bold text-slate-500 uppercase">
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xs font-bold text-slate-500 uppercase">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500"
          />
        </div>
        <div className="flex gap-2 mt-2">
          <button
            className="disabled:cursor-not-allowed disabled:bg-frosted-blue-600 transition duration-300 ease-in-out select-none bg-frosted-blue-500 hover:bg-frosted-blue-600 text-white font-bold px-4 py-2 rounded-md cursor-pointer w-full"
          >
           Registrar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-600 text-sm cursor-pointer hover:text-slate-800 px-2"
          >
            Cancelar
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default Register;
