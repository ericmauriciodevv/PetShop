import { items } from "../items"
import Item from "../components/Item"
import NavBar from "../components/NavBar"
import LogIn from "../components/LogIn"
import { useState } from "react"
type propCategory = {
  category: any
}

const shop = () => {
  const [filteredItems, setFilteredItems] = useState(items) 
  const [IsHover, setIsHover] = useState(false)

  const filterHandler = (category: any ) => {
    const filterList = items.filter(item => item.category[0] === category )
    setFilteredItems(filterList)
  }
    return(
    <div>
      <title>PetShop | shop</title>
      <NavBar></NavBar>
      
    <div className='container'>
      
      <h1>shop</h1>
      <div className="row bg-light mb-5 rounded mx-0 px-0">
        <div className="col-4 mx-0">
          <div className="btn" onClick={()=>{filterHandler("comida")}}>comida</div>
        </div>
        <div className="col-4">
          <div className="btn" onClick={()=>{filterHandler("collares")}}>collares</div>
        </div>
        <div className="col-4">
          <div className="btn" onClick={()=>{filterHandler("camas")}}>camas</div>
        </div>
       </div>

      <div className="row align-items-start justify-content-center">
      
        {filteredItems.map(function(item){
          return(
          <Item  alt="depend" href={`/shop/${item.id}`} price={`$${item.price}`} key={item.id} name={item.name} img={item.img} description={item.description}></Item>)
        })}
        
        
      
      </div>
      
    </div>

    </div>
    )
}

export default shop