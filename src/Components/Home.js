import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Home({subs}){
    return(
        <Container>
            {subs.map(e=><Link key={e.path} to={e.path} >{e.nome}</Link>)}
        </Container>
    );
}

const Container=styled.div`

`;