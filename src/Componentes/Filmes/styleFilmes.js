import styled from 'styled-components'
let container = "60%";
export const SetaAnterior = styled.div`
position: absolute;
height: 30px;
width: 30px;
background-color: #1E90FF;
border-radius: 50%;
display: flex;
align-items: center;
justify-content:center;
`;
export const SetaProximo = styled.div`
position: absolute;
height: 30px;
width: 30px;
background-color: #1E90FF;
border-radius: 50%;
display: flex;
align-items: center;
justify-content:center;
`;
export const RowFilmes = styled.div`
   height: 100%;
   width: 100%;
   color:white;
   position: relative;
   overflow: hidden;
   ${SetaAnterior}{
    position: absolute;
    left:0%;
    top:50%;
    font-size:20px;
    color:black;
    z-index:10000;
    @media (max-width: 769px) {
      display: none;
    }
   }
   ${SetaProximo}{
    position: absolute;
    right:0%;
    top:50%;
    font-size:20px;
    font-weight: bold;
    color:black;
    z-index:10000;
    @media (max-width: 769px) {
      display: none;
    }
   }


   @media(max-width : 769px){
    overflow-y: hidden;
    overflow-x: auto;
    padding:10px 0px;

    &::-webkit-scrollbar{
        background:grey;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: white;
        border-radius:10px;
    }
   }
`;

export const BuscaAnime = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: ${container};
    position: relative;
    margin: 10px auto;
    @media (max-width: 769px) { 
        width: 100%;
    }
`;

export const InputBusca = styled.input`
     border-radius: 10px;
     width: 80%;
     height: 30px;
     border:none;
     @media (max-width: 769px) { 
        width: 95%;
    }
`;
export const ContainerFilmes = styled.section`
    height: 100%;
    display: flex;
    gap:8px;
`;

export const ContainerFilme = styled.article`
    position: relative;
    text-align:center;
    flex-shrink:0;
    width: 8.7%;
    height: 300px;
    @media (max-width: 769px) {
        height: 220px;
        width: 31.9%;
    }
`;
export const Categoria = styled.h2`
margin-left: 2px;
&::before{
    content:"";
    border:2px solid #b355ff;
    border-radius: 60px;
    margin: 0px 5px 5px 0px;
}
`
export const ContainerPath = styled.div`
object-fit: cover;
width: 100%;
height: 90%;
`;

export const PosterFilm = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
`;

export const Tittle = styled.p`
text-overflow: ellipsis;
font-size:0.9em;

height: 10%;
`;

export const Nota = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
height: 30px;
width: 30px;
border-radius: 50%;
background-color: #1E90FF;
top:0;
`;
export const ContainerMainFilmes = styled.section`
padding:20px;
`;

export const Slider = styled.section`
    position: relative;
    transition: .700s;
    transform: translateX(${({trans}) => trans + "px"});
`;


export const ContainerModal = styled.section`
   position: absolute;
   z-index:999999;
   width:880px;
   max-height: 600px;
   overflow: auto;
   top:35px;
   box-sizing:border-box;
   border-radius: 20px;
   padding:20px;
   background-color: white;
   background-color: #c6eff2;
`;
export const ItemModal = styled.p`
    border-bottom: 1px solid grey;
    background-color: #c6eff2;
    margin:0px;
    padding:10px;
`;