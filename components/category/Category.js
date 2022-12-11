import CategoryItem from "./CategoryItem"
import HoverCategory from "./HoverCategory"
import { useState } from "react"

    const IndexCategory = () =>{
        const [ishover, setIsHover] = useState(false)
    return(
        <div>
            <h3>Category</h3>
            <p className='text-secondary'>Labels for find wathever do you want</p>

            <div className="row">
            {categorys.map((category) => {
                return(
                <div className="bg-ligth col w-25 ml-3 text-center">
                    <CategoryItem onMouseOver={()=> {setIsHover(true)}} onMouseLeave={()=> {setIsHover(false)}} className={ishover ? "opacity-50 rounded col my-3" : "rounded col my-4"} key={category} src={category.img} category={category.name}/>
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
                    }}></HoverCategory>
                </div>
                )
            } )}

            </div>
               
        </div>
        
    )
}

export default IndexCategory

const categorys = [
    {
        id: "1",
        name: "Food",
        img: "/img/food.jpeg" 
    },
    {
        id: "2",
        name: "Objects",
        img: "/img/products/collar2.jpeg" 
    },
    {
        id: "3",
        name: "Cats",
        img: "/img/categoryC.jpeg" 
    },
    {
        id: "4",
        name: "Dogs",
        img: "/img/categoryD.jpeg" 
    }
]