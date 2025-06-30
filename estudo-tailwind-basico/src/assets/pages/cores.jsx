export const Cores = () =>{
    return(
        <>
            <h1>Cores</h1>
            {/* o / é para opacidade */}
            <div className="text-red-600/50">
                Texto 1
            </div>

            <div className="text-amber-300">
                Texto 1
            </div>

            <div>
                <button className="bg-indigo-600 border-red-800 text-primary">
                    Botão
                </button>
            </div>

            <div>
                <button className="bg-red-600 px-4 py-2 text-[#00FF00]">
                    Teste 1
                </button>
            </div>
        </>
    )
}