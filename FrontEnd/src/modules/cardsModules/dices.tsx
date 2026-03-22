import d4 from "../../assets/dices/d4.png";
import d6 from "../../assets/dices/d6.png";
// import d8 from "../../assets/d8.png"; - Falta achar
// import d10 from "../../assets/d10.png"; - Falta achar
import d12 from "../../assets/dices/d12.png";
import d20 from "../../assets/dices/d20.png";

interface DicesProps {
    withHistory?: boolean;
    diceSize: number; //tamanho do dado, ex: 4, 6, 8, 10, 12, 20
    modifier: number; //modificador do dado, ex: +2, -1
}

function rollDice(sides: number): number {
    return Math.floor(Math.random() * sides) + 1;
}

function Dices(props: DicesProps) {
    let diceImage;
    switch (props.diceSize) {
        case 4:
            diceImage = d4;
            break;
        case 6:
            diceImage = d6;
            break;
        case 12:
            diceImage = d12;
            break;
        case 20:
            diceImage = d20;
            break;
        default:
            diceImage = d6; // padrão para d6
    }
    

    return(
        <div>
            <img src={diceImage} alt="Dice image" />
        </div>
    );
}

export default Dices;