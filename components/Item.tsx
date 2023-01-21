import Image from "next/image"
import React from "react"


type propsItem = {
    img: string,
    description: string,
    price: string,
    href: string
    name: string, 
    alt: string
}

const  Item =(props : propsItem) => {
    return(
        <div className="d-inline border rounded-3 p-2 mb-4 mx-2 p-4 w-25">
            <div className="justify-content-center">
            <Image alt={props.alt}  src={props.img} width={200} height={200}></Image>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p className="h5 text-secondary">{props.price}</p>
            <a href={props.href}  className="btn px-4 bg-info">Get</a>

            </div>
        </div>
    )
}

export default Item