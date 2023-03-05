import styled from "styled-components";
import ItensMain from "./ItensMain";

export default function Main({ produtos, adicionarItem }) {

    return (
        <ContainerLista>
            {produtos.map(e => <ItensMain key={e.id} item={e} adicionarItem={adicionarItem} />)}
        </ContainerLista>
    );
}

const ContainerLista = styled.div`
  display: flex;
  flex-wrap: wrap;
`;