import styled from "styled-components";
import ItensLista from "./ItensLista";

export default function Lista({ lista, removerItem }) {

    function somar(){
        let soma=0;
        for(const item of lista){
            soma+=Number(item.preco.replace('R$','').replace(',','.'));
        }
        return `R$${soma.toFixed(2).replace('.',',')}`;
    }

    return (
        <ContainerCarrinho>
            <ContainerItens>
                {lista.map((e) => <ItensLista key={e.id} item={e} removerItem={removerItem} />)}
            </ContainerItens>
            <ContainerTotal>
                <span>Total: {somar()}</span>
            </ContainerTotal>
        </ContainerCarrinho>
    );
}

const ContainerCarrinho = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 98vh;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContainerItens=styled.div`
    max-height:100%;
    overflow-y: auto;
`

const ContainerTotal=styled.div`
    height: 50px;
    border: 1px solid black;
`