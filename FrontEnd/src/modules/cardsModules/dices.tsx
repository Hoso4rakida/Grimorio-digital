import { useState } from "react";
import d4 from "../../assets/dices/d4.png";
import d6 from "../../assets/dices/d6.png";
// import d8 from "../../assets/d8.png";
// import d10 from "../../assets/d10.png";
import d12 from "../../assets/dices/d12.png";
import d20 from "../../assets/dices/d20.png";

interface DicesProps {
  withHistory?: boolean;
  diceSize: number;
  modifier: number;
}

function rollDice(sides: number): number {
  return Math.floor(Math.random() * sides) + 1;
}

function Dices(props: DicesProps) {
  const [roll, setRoll] = useState(0);

  // Lógica de cores para Crítico ou Falha
  let status = "text-white"; // Padrão branco para contraste sobre o dado
  if (roll === props.diceSize) {
    status = "text-green-400 font-bold";
  } else if (roll === 1) {
    status = "text-red-500 font-bold";
  }

  // Mapeamento da imagem
  let diceImage;
  switch (props.diceSize) {
    case 4: diceImage = d4; break;
    case 6: diceImage = d6; break;
    case 12: diceImage = d12; break;
    case 20: diceImage = d20; break;
    default: diceImage = d6;
  }

  return (
    <div className="flex flex-col items-center gap-4">

      {roll > 0 && (
        <div className="text-center bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
          <p className="text-sm text-slate-200">
            <span className={status}>{roll}</span>
            {props.modifier > 0 ? ` + ${props.modifier}` : props.modifier < 0 ? ` ${props.modifier}` : ""}
            <span className="font-bold"> = {roll + props.modifier}</span>
          </p>
        </div>
      )}

      <div className="relative flex items-center justify-center w-60 h-60">
        <button 
          onClick={() => setRoll(rollDice(props.diceSize))}
          className="active:scale-95 transition-transform cursor-pointer"
        >
          <img
            src={diceImage}
            alt="Dice"
            className="w-full h-full object-contain hover:scale-105 transition-transform"
          />
        </button>

        {roll > 0 && (
          <span 
            className={`absolute pointer-events-none select-none text-8xl font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] ${status}`}
          >
            {roll + props.modifier}
          </span>
        )}
      </div>
    </div>
  );
}

export default Dices;