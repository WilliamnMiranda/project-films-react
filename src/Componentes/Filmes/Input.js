import React from 'react'
import {InputBusca} from './styleFilmes'
const Input = ({onChange,valorInput}) => {
    return (
       <InputBusca onChange ={onChange} value ={valorInput}/>
    )
}

export default Input
