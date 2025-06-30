export const EspacamentosTamanhos = () => {
    return (
        <div className="space-y-2">
            <h1>Espaçamentos e Cores</h1>

            <div className="flex bg-blue-400 w-40 h-40 justify-center content-center">
                DIV QUALQUER
            </div>
            <div className="flex bg-red-400 max-w-30 min-h-30 justify-center content-center">
                DIV QUALQUER
            </div>
            {/* h-[...px] -> para tamanhos fixos definidos por mim 
                ou size-[...px] que define os dois
            */}
            <div className="flex bg-purple-400 size-[100px] justify-center content-center">
                DIV QUALQUER
            </div>
            {/* com fração é em relação ao elemento pai ou a porcentagem ex: size-[50%]*/}
            <div className="flex bg-yellow-400 size-1/2 justify-center content-center">
                DIV QUALQUER
            </div>
        </div>
    )
}