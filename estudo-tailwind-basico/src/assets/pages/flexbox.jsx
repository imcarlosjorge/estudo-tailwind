export const Flexbox = () => {
  return (
    <>
      <h1>Flexbox</h1>

      {/* items-center alinha na vertical 
      
      eu posso definir um layout geral e depois especificar em cada item.
      O geral fica sobre os  que eu não modificar individualmente
      
      */}

      <section className="mb-[2rem]">
        <div
          className="
        mt-10 w-[800px] 
        h-[300px] 
        mx-auto 
        bg-sky-400 
        flex 
        gap-10
        justify-center
        items-center"
        >
          <div className="size-14 bg-red-400  self-start text-white rounded">
            01
          </div>
          <div className="size-14 flex-1/2 self-end bg-red-400  text-white rounded">
            02
          </div>
          <div className="size-14 bg-red-400  text-white rounded">03</div>
          <div className="size-14 bg-red-400  text-white rounded">04</div>
        </div>
      </section>

      <section>
        <div className="
        mt-10 w-[800px] 
        h-[300px] 
        mx-auto 
        bg-sky-400 
        flex 
        gap-10
        justify-center
        items-center
        flex-col">
          <div className="size-14 bg-red-400  self-start text-white rounded">
            01
          </div>
          <div className="size-14 flex-1/2 self-end bg-red-400  text-white rounded">
            02
          </div>
          <div className="size-14 bg-red-400  text-white rounded">03</div>
          <div className="size-14 bg-red-400  text-white rounded">04</div>
        </div>
      </section>
    </>
  );
};
