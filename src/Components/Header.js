import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header({hideBack}) {

    return (
        <MyHeader hideBack={hideBack} >
            <Link to="/" >{'< Back'}</Link>
            <span>Praticas</span>
        </MyHeader>
    );
}

const MyHeader=styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: pink;
    position: absolute;
    top: 0;
    left: 0;

    a{
        display: ${({hideBack})=>hideBack?'none':'initial'};
        position: absolute;
        left: 0;
        outline: none;
        border: none;
        background: transparent;
        text-decoration: none;
        color: black;
    }

    span{

    }
`;