import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import ConversorMoeda from "./Components/ConversorMoeda";
import ECommerce from "./Components/ECommerce";
import Header from "./Components/Header";
import Home from "./Components/Home";

const ROUTERS = [
  {nome: 'Conversor', path: "/Conversor", element: ConversorMoeda},
  {nome: 'E-commerce', path: "/E-commerce", element: ECommerce}

]

export default function App() {

  const useTest = () => {
    if (useLocation().pathname === '/') return true;
    else return false;
  };

  return (
    <WebSite>
      <Header hideBack={useTest()} />
      <MyMain>
        <Routes>
          <Route exact path="/" element={<Home subs={ROUTERS} />} />
          {ROUTERS.map(e => <Route key={e.path} exact path={e.path} element={<e.element />} />)}
        </Routes>
      </MyMain>
    </WebSite>
  );
}

const WebSite = styled.div`
  height: 100vh;
  width: 100%;
`;

const MyMain=styled.main`
  height: 100%;
  width: 100%;
  padding-top: 60px;
`;