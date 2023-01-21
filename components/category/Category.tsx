import JSXStyle from "styled-jsx/style"
import React from "react"
import CategoryItem from "./CategoryItem"
import HoverCategory from "./HoverCategory"
import { useState } from "react"
type categoryItemProps = {
    id: number,
    name: string,
    img: string,
    alt: string
    top: string,
    left: string,
    topH: string,
}

type propsIndexCategory = {
    categorys: object,
}
    const Category = (props: propsIndexCategory) =>{
        const [ishover, setIsHover] = useState(false)
    return(
        <div>
            <h3>Category</h3>
            <p className='text-secondary'>Labels for find wathever do you want</p>

            <div className="row">
            {categorys.map((category : categoryItemProps) => {
                return(
                <div className="bg-ligth col w-25 ml-3 text-center">
                    <CategoryItem onMouseOver={()=> {setIsHover(true)}} onMouseLeave={()=>  {setIsHover(false)}} alt={category.alt}  key={category.id} src={category.img} category={category.name}/>
                    <HoverCategory onMouseOver={()=> {setIsHover(true)}} onMouseLeave={()=>  {setIsHover(false)}} style={ishover ? {
                        backgroundColor: "white",
                        position: "absolute",
                        top: category.top,
                        left: category.left,
                    }:{
                        backgroundColor: "white",
                        position: "absolute",
                        top: category.topH,
                        left: category.left,
                    }
                </div>
                )
            } )}

            </div>
               
        </div>
        
    )
}

export default Category

const categorys = [
    {
        id : 1,
        name: "Food",
        img: "/img/food.jpeg",
        alt: "Food",
        top: "1000",
        left: "150",
        topH: "9050"
    },
    {
        id: 2,
        name: "Objects",
        img: "/img/products/collar2.jpeg" ,
        alt: "Objects",
        top: "1000",
        left: "200",
        topH: "9050"
    },
    {
        id: 3,
        name: "Cats",
        img: "/img/categoryC.jpeg",
        alt: "Cats",
        top: "1000",
        left: "150",
        topH: "9050"
    },
    {
        id: 4,
        name: "Dogs",
        img: "/img/categoryD.jpeg",
        alt: "Dogs",
        top: "1000",
        left: "150",
        topH: "9050"
    }
]