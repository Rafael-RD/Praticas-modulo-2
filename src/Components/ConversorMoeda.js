import { useState } from "react";
import styled from "styled-components";

const CAMBIO = [
  { name: "Dólar Americano", code: "USD", price: 5.39 },
  { name: "Iene", code: "JPY", price: 0.038 },
  { name: "Euro", code: "EUR", price: 5.53 }
];

export default function ConversorMoeda() {
  const [valor, setValor] = useState('');
  const [moeda, setMoeda] = useState(0);
  const [resultado, setResultado] = useState('');

  function converter() {
    if (/^\d+(,|\.|)\b(\d+|)$/.test(valor)) setResultado(`${CAMBIO[moeda].code} ${(Math.ceil(Number((valor.replace(',', '.')) / CAMBIO[moeda].price) * 100) / 100).toFixed(2).replace('.', ',')}`);
    else setResultado('Não é um numero valido');
  }

  return (
    <Container>
      <span>Conversor Monetario</span>
      <input value={valor} onChange={(e) => setValor(e.target.value)} onKeyDown={e => e.key === 'Enter' && converter()} />
      <select value={moeda} onChange={e => setMoeda(e.target.value)} >
        {CAMBIO.map((e,i)=><option key={i} value={i}>{e.name}</option>)}
      </select>
      <button onClick={converter} >Converter</button>
      <span>{resultado}</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  
  span:first-child{
    font-size: 3vw;
    color: rgb(17, 153, 24);
    margin-bottom: 20px;
  }
  
  input{
    font-size: 1vw;
    text-align: center;
    outline: none;
    border: none;
    box-shadow: 0px 0px 10px 1px rgba(17, 153, 24,.8);
    border-radius:10px;
    height: 30px;
    width: 300px;
    margin-bottom: 20px;
  }
  
  select{
    text-align: center;
    outline: none;
    height: 30px;
    width: 300px;
    border-radius: 10px;
    font-size: 1vw;
    margin-bottom: 20px;
  }
  
  button{
    height: 30px;
    width: 300px;
    font-size: 1vw;
    margin-bottom: 20px;
    background: none;
    outline: none;
    border: 2px solid rgb(17, 153, 24);
    border-radius: 10px;
  }
  
  span:last-child{
    height: 30px;
    width: 300px;
    font-size: 2vw;
    text-align: center;
  }
`;
