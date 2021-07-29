import styled from 'styled-components'

let container = "60%";
export const ContainerHeader = styled.header`
    background-color:black;
    height: 70px;
    border-bottom:1px solid rgba(220,220,220,0.3);
`;

export const Navegacao = styled.nav`
    display:flex;
    align-items: center;
    justify-content: space-between;
    gap:10px;
    height: 100%;
    width: ${container};
    margin:0 auto;
    @media (max-width: 769px) {
        width: 100%;
    }
`;

export const Lista = styled.ul`
    display:flex;
    padding:0px;
    align-items: center;
    gap:10px;
    list-style: none;
    overflow: hidden;
    transition:1s;
    @media (max-width: 769px) {
        height:${({menu}) => menu ? "100%" : "0px"};
        background-color: black;
        position: absolute;
        z-index:100;
        top:54px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`;

export const ItemLista = styled.li`
    padding:5px;
    color:white;
    font-weight: bold;
    font-size:1.2em;
    display: flex;
    align-items: center;
    &:hover{
        cursor:pointer;
        color:#1E90FF;
    }
    @media (max-width: 769px) { 
        width: 97%;
    }
`;

export const Logo = styled.article`
   color:white;
   font-weight: bold;
    font-size:2.0em;
`;

export const IconMenu = styled.div`
   display: flex;
   align-items: center;
   font-size: 1.2em;
   margin-right: 5px;
`;
export const MenuMobile = styled.div`
    display: none;

    @media (max-width: 769px) { 
        display: block;
        color:white;
        font-size: 1.7em;
     }
`;

export const ButtonLogin = styled.button`
    width: 100px;
    height: 33px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    color:black;
    font-weight: bold;
    background-color:#1E90FF;
    font-size:0.9em;
    border:none;
    outline: none;
    &:hover{
        cursor:pointer;
        border:1px solid black;
        color:white
    }

    @media (max-width: 769px) { 
        width: 100%;
        color:white;
        border-radius:0px;
        font-size: 0.9em;
        height: 35px;
     }
`;

