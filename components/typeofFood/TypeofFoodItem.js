import React, {useState} from 'react'
import Image from 'next/image'


const TypeofFoodItem = ({src}) => {
    const [ishover, setIsHover] = useState(false)
    return <Image onMouseOver={()=> {setIsHover(true)}} onMouseLeave={()=> {setIsHover(false)}} className={ishover ? "opacity-50 rounded-4 col-3 my-2" : "rounded-4 col-3 my-2"} src={src} width={100} height={200}></Image>
       
  
}

export default TypeofFoodItem