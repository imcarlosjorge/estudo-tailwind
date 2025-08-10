export const Filters = () =>{
    return (
        <>
            <h1>Filters</h1>

            <div className="blur-xs bg-indigo-700 size-20">
                Blur
            </div>

            <div className="relative flex items-center justify-center">
                <img className="size-[100px]" src="https://media.istockphoto.com/id/470604022/pt/foto/macieira.jpg?s=612x612&w=0&k=20&c=gMEb9j3cDknJdGi3Km7X7jbhbzPKQEx-fpyZSuU50wk=" alt="tree" />
                <div className="absolute size-[100px] backdrop-blur-md rounded"></div>
            </div>

            {/* grayscale inverte as cores. É bom pra fazer com indicação visual de
            desabilitar botão
            
            */}

            <button 
            className="bg-indigo-500 font-bold text-white py-4 px-9 rounded-2xl disabled:grayscale" disabled>
                Botão
            </button>

        </>
    )
}