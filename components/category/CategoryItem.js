import React, {useState} from 'react'
import Image from 'next/image'
import HoverCategory from './HoverCategory'

const CategoryItem = ({src, category, className}) => {
    const [ishover, setIsHover] = useState(false)
    
    return (
        <>
        <Image className={className} src={src} width={200} height={200}></Image>
        <HoverCategory style={ishover ? {
            backgroundColor: "white",
            position: "absolute",
            top: "10px",
            left: "150px",
            }:{
                backgroundColor: "white",
                position: "absolute",
                top: "700px",
                left: "20000px",
                        }} />
        </>
    )
}

export default CategoryItem