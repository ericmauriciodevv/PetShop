import React, {useState} from 'react'
import Image from 'next/image'
type propsTypeofFoodItem = {
    src: string,
    alt: string
}

const TypeofFoodItem = (props : propsTypeofFoodItem) => {
    const [ishover, setIsHover] = useState(false)
    return <Image alt={props.alt} onMouseOver={()=> {setIsHover(true)}} onMouseLeave={()=> {setIsHover(false)}} className={ishover ? "opacity-50 rounded-4 col-3 my-2" : "rounded-4 col-3 my-2"} src={props.src} width={100} height={200}></Image>
       
  
}

export default TypeofFoodItem