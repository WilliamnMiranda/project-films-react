import React from 'react'
import {ContainerModal} from './styleFilmes'
const Modal = (filmes) => {
 return(
     <ContainerModal>
         {
              filmes.filmes.results && filmes.filmes.results.map((item)=>{
                return <span>{item.title}</span>
           })
         }
     </ContainerModal>
 )
}

export default Modal
