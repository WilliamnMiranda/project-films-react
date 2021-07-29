import React from 'react'
import Filme from './Filme'
import useFetch from '../../Hooks/useFetch'
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io";
import {RowFilmes,Categoria,ContainerFilmes,SetaAnterior,SetaProximo,Slider} from './styleFilmes'
import useSlide from './../../Hooks/useSlide'
const TopRate = () => {
    let {maisVotados,pathImg} = useFetch();
    let posTopRate = useSlide();
    return (
        <RowFilmes>

            <SetaAnterior onClick={posTopRate.slidePrev}>
                <IoIosArrowBack/>
            </SetaAnterior>
            <Slider trans = {posTopRate.position}>
                    <Categoria>Mais avaliados</Categoria>
                        <ContainerFilmes>
                        {
                        maisVotados.results && maisVotados.results.map((item)=>{
                            return <Filme key={item.title} path = {pathImg} filme = {item}/>
                        })
                    }
                    </ContainerFilmes>
            </Slider>

            <SetaProximo onClick={posTopRate.slideNext}>
                <IoIosArrowForward/>
            </SetaProximo>

        </RowFilmes>
    )
}

export default TopRate