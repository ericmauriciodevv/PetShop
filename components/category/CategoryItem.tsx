import React, {useState} from 'react'
import Image from 'next/image'
import HoverCategory from './HoverCategory'

type categoryProps  ={
    src : string,
    category: string,
    alt: string
}

const CategoryItem = (props: categoryProps) => {
    const [ishover, setIsHover] = useState(false)
    
    return (
        <>
        <Image alt={props.alt} onMouseOver={()=> {setIsHover(true)}} onMouseLeave={()=>  {setIsHover(false)}} className={ ishover ? "opacity-50 rounded col my-3" : "rounded col my-4"} src={props.src} width={200} height={200}></Image>
        </>
    )
}

export default CategoryItem