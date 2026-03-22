import Header from "../modules/Header";

function BackError() {
  return (
    <>
    <Header />
    <div className="w-screen h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-deep-space-blue-900">Ops... Página não encontrada!</h1>
    </div>
    </>
  );
}

export default BackError;