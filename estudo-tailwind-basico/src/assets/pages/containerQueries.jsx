export const ContainerQueries = () =>  {
    return (
        <>
        {/* Container queries - recurso que adapta os containers dos elementos filhos
            ao container do elemento pai.
            @container -> container que quero observar.
        */}
            <h1>Container Queries</h1>
            {/* @max-sm quer dizer até no máximo o tamanho small
                funciona como um breakpoint, mas para o tamanho do contêiner, não da tela.

                @sm: aplica de small para cima
            */}

            <div className=" bg-blue-100 p-6 rounded-lg shadow-md mx-auto w-sm @container">
                <p className="@max-sm:text-center @sm:text-red-700">Este layout se adapta com base  no tamanho do container pai</p>
            </div>
        </>
    )
}