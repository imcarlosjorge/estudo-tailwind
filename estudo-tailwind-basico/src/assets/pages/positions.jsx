export const Positions = () => {
  return (
    <div className="w-[100%] h-[1500px]">
      <h1>Positions</h1>

      {/* botão de ajuda */}
      <button
        className="
      bg-yellow-400 
      px-[20px] 
      py-[10px] 
      rounded-[5px] 
      font-bold 
      cursor-pointer
      fixed bottom-7 right-7"
      >
        Botão Fixado
      </button>
      
      <button
        className="
      bg-red-400 
      px-[20px] 
      py-[10px] 
      rounded-[5px] 
      font-bold 
      cursor-pointer
      sticky top-0 z-50"
      >
        Botão Sticky
      </button>

      <button
        className="
      bg-red-400 
      px-[20px] 
      py-[10px] 
      rounded-[5px] 
      font-bold 
      cursor-pointer
      relative top-[100px] right-[-700px]"
      >
        Botão Relativo
      </button>

      <button
        className="
      bg-red-400 
      px-[20px] 
      py-[10px] 
      rounded-[5px] 
      font-bold 
      cursor-pointer
      absolute top-0 right-0"
      >
        Botão Absolute
      </button>
    </div>
  );
};
