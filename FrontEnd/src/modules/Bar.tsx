import { useState } from "react";
import logo from "../assets/logo.svg";
import Login from "./login.tsx";

function Bar() {
  const [getLogin, setLogin] = useState(false);
  const [isRegistred, setIsRegistred] = useState(false);

  return (
    <footer>
      <div className="font-bold w-full flex p-3 items-center justify-between uppercase">
        <div>
          <img src={logo} alt="Logo" className="h-40" />
        </div>
        <div className="flex gap-5 items-center">
          <a href="#">Meus grimorios</a>
          <a href="#">Grimorios da Comunidade</a>
          <a href="#">Configurações</a>
          <button
            className="uppercase bg-deep-space-blue-950 text-white px-3 py-2 rounded-md cursor-pointer"
            onClick={() => {
              setLogin(!getLogin);
            }}
          >
            {isRegistred ? "Perfil" : "Login"}
          </button>
        </div>
      </div>
      {getLogin && <Login isActive={getLogin} onClose={() => {setLogin(false)}}/>}
    </footer>
  );
}

export default Bar;
