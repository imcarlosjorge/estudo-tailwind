export const DesignResponsivo = () => {
  return (
    <>
      <h1>Design Responsivo</h1>
      {/* breakpoints: sm (640px) | md (768px) | lg (10024px) | xl (1280px) | 2xl (1536px) */}
      <div className="flex items-center justify-center">
        <div className="w-56 bg-sky-500 text-white rounded-md p-2 flex justify-center">
          Smartphones (até 640px)
        </div>

        {/* o hidden é para esconder e o md:block é que ele só aparece a partir do tamanho MD pra cima */}
        <div className="w-56 bg-yellow-500 text-white rounded-md p-2 flex justify-center hidden md:block">
          Tablets (até 768px)
        </div>
        <div className="w-56 bg-orange-500 text-white rounded-md p-2 flex justify-center hidden lg:block">
          Desktops (até 1024px)
        </div>
        <div className="w-96 bg-red-500 text-white rounded-md p-2 flex justify-center hidden xl:block">
          Monitores Grandes (até 1280px)
        </div>
        <div className="w-96 bg-green-500 text-white rounded-md p-2 flex justify-center hidden 2xl:block">
          Monitores Extra Grandes (até 1536px)
        </div>

        {/* NÃO FUNCIONOU PORQUE A TELA É PEQUENA */}
        
        {/* <div className="w-96 bg-green-500 text-white rounded-md p-2 flex justify-center hidden 3xl:block">
          Monitores Extra Extra Grandes (até 2000pxpx)         
        </div> */}
      </div>
    </>
  );
};
