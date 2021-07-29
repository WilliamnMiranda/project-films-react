import React from 'react'
import {ContainerFilme,ContainerPath,PosterFilm,Tittle,Nota} from './styleFilmes';

const Filme = ({path,filme}) => {
  
    
    return (
        <ContainerFilme >
           <ContainerPath>    
                <PosterFilm src = {path + filme.poster_path}/>
                <Nota>{filme.vote_average}</Nota>
           </ContainerPath>
           <Tittle>{filme.title}</Tittle>
        </ContainerFilme>
    )
}

export default Filme