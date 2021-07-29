import React from 'react'

const useSlide = (popular) => {
    let[position,setPosition] = React.useState(0);
    let[active,setActive] = React.useState(0);
    let refTam = React.useRef();
    React.useEffect(()=>{
        setPosition(-(170 * active))
    },[active])

    function slideNext(){
       if(active < 9){
        setActive(active + 1)
       }
    }

    function slidePrev(){
        if(active  > 0){
            setActive(active - 1)
        }
    }

    return{
        position,
        slideNext,
        slidePrev,
        refTam
    }
}

export default useSlide
