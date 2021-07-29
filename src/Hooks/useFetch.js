import React from 'react'

const useFetch = () => {
    let basic = "https://api.themoviedb.org/3";
    let apiKey = "api_key=6d0ad7ca01e2d36a0bac81539738eb11";
    let pathImg = "https://image.tmdb.org/t/p/w300/";
    let apiDrama = `${basic}/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&${apiKey}`;
    let apiPopulares = `${basic}/discover/movie?sort_by=popularity.desc&${apiKey}`;
    let MaioresNota = `${basic}/movie/top_rated?${apiKey}`
    let [populares , setPopulares] = React.useState({});
    let [Drama , setDrama] = React.useState({});
    let [maisVotados,setMaisVotados] = React.useState({});
    React.useEffect(()=>   {
            fetch(apiPopulares).then((r)=> r.json()).then((e)=> {
                setPopulares(e)
            })
    },[])

    React.useEffect(()=>   {
        fetch(apiDrama).then((r)=> r.json()).then((e)=> {
            setDrama(e)
        })
    },[])


    React.useEffect(()=>   {
        fetch(MaioresNota).then((r)=> r.json()).then((e)=> {
            setMaisVotados(e)
        })
    },[])
 
    return {
        populares,
        pathImg,
        Drama,
        maisVotados
    }
}

export default useFetch
