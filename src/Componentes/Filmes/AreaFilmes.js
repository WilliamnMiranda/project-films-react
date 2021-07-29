import React from 'react'
import {BuscaAnime,ContainerMainFilmes,ContainerModal} from './styleFilmes'
import useFilme from './../../Hooks/useFilme'
import Drama from './Drama'
import BuscarAnime from './BuscarAnime'
import TopRate from './TopRate'
import Populares from './../Filmes/Populares'
const AreaFilmes = () => {
    let a = useFilme();
    return (
    <ContainerMainFilmes>
        <BuscarAnime/>
        <Populares/>
        <TopRate/>
        <Drama/>
    </ContainerMainFilmes>
    )
}

export default AreaFilmes
