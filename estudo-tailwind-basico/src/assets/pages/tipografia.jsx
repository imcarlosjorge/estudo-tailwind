export const Tipografia = () => {
  return (
    <section>
      <h1 className="text-4xl font-bold">Tipografia</h1>
      <h2 className="text-2xl font-semibold italic">Tipografia - SubTitle</h2>

      <section>
        <h1 className="text-4xl  font-bold">Espaçamento e Altura de Linha</h1>

        <div className="space-y-4">
            {/* espaçamento entre as letras */}
            <p className="tracking-tighter">
                Texto Qualquer 1
            </p>
            <p className="tracking-tight">
                Texto Qualquer 2
            </p>
            <p className="tracking-normal">
                Texto Padrão
            </p>
            <p className="tracking-widest">
                Texto Padrão 3
            </p>
            {/* Altura da linha */}
            <p className="leading-tight">
                Texto Qualquer de Altura da Linha
            </p>
            <p className="leading-loose">
                Texto Qualquer de Altura da Linha 2
            </p>
            <p className="leading-normal">
                Texto Qualquer de Altura da Linha Normal
            </p>
        </div>
      </section>
      <section>
        <h1 className="text-4xl  font-bold">Alinhamento de Texto</h1>

        <div className="space-y-4">
            <p className="text-left">
                Texto alinhado à esquerda
            </p>
            <p className="text-center">
                Texto centralizado
            </p>
            <p className="text-right">
                Texto alinhado à direita
            </p>
            {/* justificado -> ajusta as margens a direita e esquerda ao mesmo tempo.
            break-words -> quebra somente as palavras
            */}
            <p className="text-justify break-words capitalize">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur posuere hendrerit urna eu ultricies. Proin et neque convallis, 
                venenatis dui id, pellentesque massa. Integer eleifend commodo odio, 
                blandit lobortis dui ullamcorper sit amet. Etiam aliquet sagittis placerat. 
                Morbi a eros nibh. Sed malesuada dui vel iaculis sagittis. 
                Vestibulum gravida dignissim odio ut laoreet. Sed mattis tincidunt diam quis ornare. 
            </p>
            {/* Line-clamp-número -> define o número de linhas que quero que o texto apareça */}
            <p className="text-justify line-clamp-1 uppercase">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur posuere hendrerit urna eu ultricies. Proin et neque convallis, 
                venenatis dui id, pellentesque massa. Integer eleifend commodo odio, 
                blandit lobortis dui ullamcorper sit amet. Etiam aliquet sagittis placerat. 
                Morbi a eros nibh. Sed malesuada dui vel iaculis sagittis. 
                Vestibulum gravida dignissim odio ut laoreet. Sed mattis tincidunt diam quis ornare. 
            </p>  
            {/* Com a largura defina, o truncate impede o restante do texto de aparecer
            e coloca "..." no final do que passar.
            */}    
            <p className="text-justify w-48 truncate lowercase">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur posuere hendrerit urna eu ultricies. Proin et neque convallis, 
                venenatis dui id, pellentesque massa. Integer eleifend commodo odio, 
                blandit lobortis dui ullamcorper sit amet. Etiam aliquet sagittis placerat. 
                Morbi a eros nibh. Sed malesuada dui vel iaculis sagittis. 
                Vestibulum gravida dignissim odio ut laoreet. Sed mattis tincidunt diam quis ornare. 
            </p>            
        </div>
      </section>
    </section>
  );
};
