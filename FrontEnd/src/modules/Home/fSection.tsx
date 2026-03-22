import CardD from "../cardsModules/cardD"; //dinamic card
import CampoTitulo from "../cardsModules/input"; //campo titulo e input estilizados
import BoxD from "../cardsModules/boxD"; //box dinamica
import Dices from "../cardsModules/dices"; //dado estilizado

function Fsection() {
  return (
    <section className="flex flex-row gap-5 mt-5">
      <BoxD boxW={2} boxH={1}>
        <h1 className="text-5xl uppercase">Seu mundo de RPG, <span className="font-bold">Organizado.</span></h1>
        <p className="text-xl mt-3 font-bold">Crie fichas, gerencie suas campanhas, role dados e crie mesas em um só lugar.</p>
        <a href="/fichas"><button className="bg-deep-space-blue-900 hover:bg-deep-space-blue-800 text-white font-bold py-2 px-4 rounded-full mt-3 uppercase text-2xl">Começar agora</button></a>
      </BoxD>

      <CardD sizeH={1} sizeV={1} title="Ficha de exemplo">
        <div className="bg-deep-space-blue-300 flex flex-col gap-2 p-3 rounded-md mt-3">
          <CampoTitulo title="Nome do personagem" description="Ex: Aramil, o Mago" />
          <CampoTitulo title="Classe" description="Ex: Mago, Guerreiro" />

          {/* Atributos */}
          <div className="flex flex-row gap-1">
            <div>
              <CampoTitulo title="For" description="Ex: 2" style="w-15"/>
            </div>

            <div>
              <CampoTitulo title="Des" description="Ex: 5" style="w-15"/>
            </div>
            <div>
              <CampoTitulo title="Con" description="Ex: 3" style="w-15"/>
            </div>
            <div>
              <CampoTitulo title="Int" description="Ex: 4" style="w-15"/>
            </div>
          </div>
        </div>
      </CardD>
      <CardD sizeH={1} sizeV={2}>
        <Dices diceSize={12} modifier={1}/>
      </CardD>
    </section>
  );
}

export default Fsection;
