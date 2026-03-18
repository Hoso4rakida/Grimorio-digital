import { useState } from "react";
import logo from "../assets/logoHeader.svg";

import Login from "./login.tsx";
import Register from "./register.tsx";

function Header() {
  const [getLogin, setLogin] = useState(false);
  const [isRegistred, setIsRegistred] = useState(false);
  const [inRegister, setInRegister] = useState(false);

  return (
    <header className="w-full" >
      <div style={{marginTop: -15}} className="font-bold w-full flex p-3 items-center justify-between uppercase">
        <div > 
          <img src={logo} alt="Logo" className="h-30" />
        </div>
        <div  className="flex gap-5 items-center">
          <a href="#" className="hover:opacity-70 transition duration-300 ease-in-out">Meus grimorios</a>
          <a href="#" className="hover:opacity-70 transition duration-300 ease-in-out">Grimorios da Comunidade</a>
          <a href="#" className="hover:opacity-70 transition duration-300 ease-in-out">Configurações</a>
          <button
            className="uppercase bg-deep-space-blue-950 text-white px-3 py-2 rounded-md cursor-pointer hover:brightness-140 transition duration-300 ease-in-out"
            onClick={() => {
              setLogin(!getLogin);
            }}
          >
            {isRegistred ? "Perfil" : "Login"}
          </button>
        </div>
      </div>
      {getLogin && (
        <Login
          isActive={getLogin}
          onClose={() => {
            setLogin(false);
          }}
          onRegister={() => {
            setInRegister(true);
          }}
        />
      )}
      {inRegister && (
        <Register
          isOn={inRegister}
          onClose={() => {
            setLogin(true);
            setInRegister(false);
            
          }}
          registred={() => {
            setIsRegistred(true);
            setInRegister(false);
          }}
        />
      )}
    </header>
  );
}

export default Header;
