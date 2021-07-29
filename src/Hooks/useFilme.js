import React from 'react'

const useFilme = () => {
    let [valorInput , setValorInput] = React.useState();
    let [filmes , setFilmes] = React.useState({});
    let basic = "https://api.themoviedb.org/3";
    let apiKey = "6d0ad7ca01e2d36a0bac81539738eb11";

    function onChange({target}){
        setValorInput(target.value)
    }
    React.useEffect(()=>{
        if(valorInput){
            fetch(`${basic}/search/movie?api_key=${apiKey}&query=${valorInput}`).then((r)=> r.json()).then((e)=> {
              setFilmes(e)
            })
        }
    },[valorInput])
    return {
        onChange,
        filmes,
        setFilmes,
        valorInput,
    }
}

export default useFilme
