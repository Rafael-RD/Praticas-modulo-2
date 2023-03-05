import styled from "styled-components";

export default function ItensMain({item, adicionarItem}){
    return(
        <ItemProduto>
            <img src={item.imagem} alt={item.nome} />
            <div>
                <span>{item.nome}</span>
                <span>{item.preco}</span>
            </div>
            <button onClick={()=>adicionarItem(item)} >Comprar</button>
        </ItemProduto>
    );
}

const ItemProduto = styled.div`
  border: 1px solid black;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;

  img {
    width: 200px;
    height: 200px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
  }
`;