import React from 'react'
import Filme from './Filme'
import useFetch from '../../Hooks/useFetch'
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io";
import {RowFilmes,Categoria,ContainerFilmes,SetaAnterior,SetaProximo,Slider} from './styleFilmes'
import useSlide from './../../Hooks/useSlide'
const Drama = () => {
    let {Drama,pathImg} = useFetch();
    let posDrama = useSlide(); 
    return (
        <RowFilmes>
            <SetaAnterior onClick={posDrama.slidePrev}>
                    <IoIosArrowBack/>
            </SetaAnterior>
            <Categoria>Dramas</Categoria>
            <Slider trans = {posDrama.position}>
                        <ContainerFilmes>
                        {
                        Drama.results && Drama.results.map((item)=>{
                            return <Filme  key={item.title} path = {pathImg} filme = {item}/>
                        })
                    }
                    </ContainerFilmes>
            </Slider>

            <SetaProximo onClick={posDrama.slideNext}>
                <IoIosArrowForward/>
            </SetaProximo>
        </RowFilmes>
    )
}

export default Drama
