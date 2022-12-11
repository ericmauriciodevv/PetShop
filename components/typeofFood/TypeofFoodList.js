import { useState } from "react"
import { items } from "../../items"
import TypeofFoodItem from "./TypeofFoodItem"

const TypeofFoodList = () => {
    

    

    return(
        <div>
            <h3>Food for dogs and cats</h3>
            <p className='text-secondary'>Find all brands of pet food, food addresses</p>
            <div className="row mb-2">

            {images.map((image, i) => <TypeofFoodItem src={image} key={image} /> )}
            </div>

            
           
        </div>
        
    )
}

export default TypeofFoodList


const images = [
    "/img/comida/Chunky.jpeg",
    "/img/comida/hills.jpeg",
    "/img/comida/Monello.jpeg",
    "/img/comida/nupec.jpeg",
    "/img/comida/ProPlan.jpeg",
    "/img/comida/royalCanin.jpeg",
    "/img/comida/TasteOfTheWild.jpeg",
    "/img/comida/VetLife.jpeg"
]