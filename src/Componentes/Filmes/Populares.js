import React from 'react'
import Filme from './Filme'
import useFetch from './../../Hooks/useFetch'
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io";
import {RowFilmes,Categoria,ContainerFilmes,Slider,SetaAnterior,SetaProximo} from './styleFilmes'
import useSlide from './../../Hooks/useSlide'
const Populares = () => {
    let {populares,pathImg} = useFetch();
    let posPopular = useSlide(populares);
   
    return (
        <RowFilmes ref ={posPopular.refTam}>
            <SetaAnterior onClick={posPopular.slidePrev}>
                    <IoIosArrowBack/>
            </SetaAnterior>
            <Categoria>Populares</Categoria>
            <Slider trans = {posPopular.position}>
                        <ContainerFilmes>
                        {
                            populares.results && populares.results.map((item)=>{
                                return <Filme key={item.title} path = {pathImg} filme = {item}/>
                            })
                        }
                    </ContainerFilmes>
            </Slider>

            <SetaProximo onClick={posPopular.slideNext}>
                <IoIosArrowForward/>
            </SetaProximo>
        </RowFilmes>
    )
}

export default Populares
