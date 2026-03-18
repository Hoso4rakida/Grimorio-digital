import { useEffect, useRef } from "react";

interface RegisterProps {
  isOn: boolean;
  onClose: () => void;
}

function Register({ isOn, onClose }: RegisterProps) {
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
      <form className="flex flex-col items-center w-100 bg-white p-8 rounded-lg gap-4 border-deep-space-blue-700 border-3 shadow-2xl">
        <div>
          <label htmlFor="username" className="font-bold text-xs">username</label>
          <input type="text" id="username" name="username" className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500"/>
        </div>

        <div>
          <label htmlFor="password" className="font-bold text-xs">password</label>
          <input type="password" id="password" name="password" className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500"/>
        </div>

        <div>
          <label htmlFor="email" className="font-bold text-xs">email</label>
          <input type="email" id="email" name="email" className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500"/>
        </div>
        <button>Registrar</button>
      </form>
    </dialog>
  );
}

export default Register;
