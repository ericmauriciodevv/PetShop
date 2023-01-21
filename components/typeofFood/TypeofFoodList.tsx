import { useState } from "react"
import { items } from "../../items"
import TypeofFoodItem from "./TypeofFoodItem"
type img = {
    id: number,
    src: string,
    alt: string 
}

const TypeofFoodList = () => {
    

    

    return(
        <div>
            <h3>Food for dogs and cats</h3>
            <p className='text-secondary'>Find all brands of pet food, food addresses</p>
            <div className="row mb-2">

            {images.map((image: img, i) => <TypeofFoodItem alt={image.alt} src={image.src} key={image.id} /> )}
            </div>

            
           
        </div>
        
    )
}

export default TypeofFoodList


const images = [
    {
        id: 1,
        src: "/img/comida/Chunky.jpeg",
        alt: "Bolsa de comida chunky"
    },
    {
        id: 1,
        src: "/img/comida/hills.jpeg",
        alt: "Bolsa de comida chunky"
    },
    {
        id: 1,
        src: "/img/comida/Monello.jpeg",
        alt: "Bolsa de comida chunky"
    },
    {
        id: 1,
        src: "/img/comida/nupec.jpeg",
        alt: "Bolsa de comida chunky"
    },
    {
        id: 1,
        src: "/img/comida/ProPlan.jpeg",
        alt: "Bolsa de comida chunky"
    },
    {
        id: 1,
        src: "/img/comida/royalCanin.jpeg",
        alt: "Bolsa de comida chunky"
    },
    {
        id: 1,
        src: "/img/comida/TasteOfTheWild.jpeg",
        alt: "Bolsa de comida chunky"
    },
    {
        id: 1,
        src: "/img/comida/VetLife.jpeg",
        alt: "Bolsa de comida chunky"
    }
]