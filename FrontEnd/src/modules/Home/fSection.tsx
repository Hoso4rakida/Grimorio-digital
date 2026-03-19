import CardD from "../cardD"; //dinamic card

function Fsection() {
  return (
    <section className="flex flex-row gap-5 mt-5">
      <CardD sizeH={3} sizeV={1}>
        <h1 className="text-2xl font-bold">Ficha Exemplo</h1>
        <div className="bg-deep-space-blue-300 flex flex-col gap-2 p-3 rounded-md mt-3">
          <label className="font-bold uppercase">Nome do personagem</label>
          <input
            className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500 font"
            placeholder="Ex: Aramil, o Mago"
          />
          <label className="font-bold uppercase">Classe</label>
          <input
            className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500"
            placeholder="Ex: Mago, Guerreiro"
          />
          {/* Atributos */}

          <div className="flex flex-row gap-1">
            <div>
              <label className="font-bold uppercase">For</label>
              <input
                className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500 w-15"
                placeholder="Ex: 2"
              />
            </div>

            <div>
              <label className="font-bold uppercase">Des</label>
              <input
                className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500 w-15"
                placeholder="Ex: 1"
              />
            </div>
            <div>
              <label className="font-bold uppercase">Con</label>
              <input
                className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500 w-15"
                placeholder="Ex: 3"
              />
            </div>
            <div>
              <label className="font-bold uppercase">Int</label>
              <input
                className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500 w-15"
                placeholder="Ex: 4"
              />
            </div>
          </div>
        </div>
      </CardD>
      <CardD sizeH={1} sizeV={2}>
        <h1 className="text-2xl font-bold">Ficha Exemplo</h1>
        <div className="bg-deep-space-blue-300 flex flex-col gap-2 p-3 rounded-md mt-3">
          <label className="font-bold uppercase">Nome do personagem</label>
          <input
            className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500 font"
            placeholder="Ex: Aramil, o Mago"
          />
          <label className="font-bold uppercase">Classe</label>
          <input
            className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500"
            placeholder="Ex: Mago, Guerreiro"
          />
          {/* Atributos */}

          <div className="flex flex-row gap-1">
            <div>
              <label className="font-bold uppercase">For</label>
              <input
                className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500 w-15"
                placeholder="Ex: 2"
              />
            </div>

            <div>
              <label className="font-bold uppercase">Des</label>
              <input
                className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500 w-15"
                placeholder="Ex: 1"
              />
            </div>
            <div>
              <label className="font-bold uppercase">Con</label>
              <input
                className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500 w-15"
                placeholder="Ex: 3"
              />
            </div>
            <div>
              <label className="font-bold uppercase">Int</label>
              <input
                className="p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500 w-15"
                placeholder="Ex: 4"
              />
            </div>
          </div>
        </div>
      </CardD>
    </section>
  );
}

export default Fsection;
