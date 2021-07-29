import React from 'react'
import Input from './Input'
import useFilme from './../../Hooks/useFilme'
import {BuscaAnime,ContainerModal,ItemModal} from './styleFilmes'
const BuscarAnime = () => {
    let a = useFilme();
    console.log(a)
    return (
        <BuscaAnime>
           <Input {...a}/>
           {
               a.filmes.results && a.valorInput &&<ContainerModal>
                   {
                       a.filmes.results.map((item)=>{
                           return <ItemModal>{item.title}</ItemModal>
                       })
                   }
               </ContainerModal>
           }
        </BuscaAnime>
    )
}

export default BuscarAnime
