export const BordasESombras = () => {
  return (
    <>
      <h1>Bordas E Sombras</h1>

      <section>
        <h2 className="text-2xl font-bold mb-4">Exemplos de bordas</h2>

        <div className="flex gap-10">
            <div className="border border-gray-400 p-4 rounded">Borda Padrão</div>
            <div className="border-2 border-blue-500 p-4 rounded-lg">Borda 2px Azul</div>
            <div className="border-4 border-red-500 p-4 rounded-xl">Borda 4px Vermelha</div>
            <div className="border border-yellow-500 p-4 rounded-full">Borda Arredondada</div>
            <div className="border border-green-500 bg-green-100 p-4 rounded-full size-20"></div>
            <div className="border border-dashed border-gray-400 p-4 rounded">Borda Dashed</div>
            <div className="border-4 border-double border-orange-400 p-4 rounded">Borda Double</div>
            <div className="border-t-4 border-double border-orange-400 p-4 rounded">Borda Double</div>
            <div className="border-l-4 border-double border-orange-400 p-4 rounded">Borda Double</div>
            <div className="border-r-4 border-double border-orange-400 p-4 rounded">Borda Double</div>
            <div className="border-b-4 border-double border-orange-400 p-4 rounded">Borda Double</div>
            <div className="border-4 border-t-red-200 border-r-orange-400 border-l-amber-200 border-b-cyan-700 p-4 rounded">Borda colorida</div>
        </div>
      </section>
    </>
  );
};
