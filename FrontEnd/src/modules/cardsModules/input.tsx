interface Props {
  title: string;
  description: string;
  style?: string;
}

function CampoTitulo(props: Props) {
  return (
    <>
      <label className="font-bold uppercase">{props.title}</label>
      <input
        className={`p-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 outline-none focus:ring-2 ring-frosted-blue-500 font ${props.style || ''}`}
        placeholder={props.description}
      />
    </>
  );
}

export default CampoTitulo;
