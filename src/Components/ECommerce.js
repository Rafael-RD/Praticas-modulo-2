import { useState } from "react";
import styled from "styled-components";
import PRODUTOS from "../assets/produtos";
import Lista from "./e-commerce/Lista";
import Main from "./e-commerce/Main";

export default function ECommerce() {
  const [carrinho,setCarrinho]=useState([]);

  function adicionarItem(item){
    if(!carrinho.some(e=>e.id===item.id)){
      setCarrinho([...carrinho, item]);
    }
  }

  function removerItem(id){
    const filtered=carrinho.filter(e=>e.id!==id);
    setCarrinho(filtered);
  }

  return (
    <ContainerApp>
      <Main produtos={PRODUTOS} adicionarItem={adicionarItem} />
      <Lista lista={carrinho} removerItem={removerItem} />
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-right: 400px;
`;