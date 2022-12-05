import { items } from "../items"
import Item from "../components/item"
import NavBar from "../components/NavBar"
import LogIn from "../components/LogIn"
import LabelsBar from "../components/LabelsBar"
import { useState } from "react"

export default function shop() {
  const [filteredItems, setFilteredItems] = useState(items) 

  const filterHandler = (category) => {
    const filterList = filteredItems.filter(item => item.category[0] === category)
    setFilteredItems(filterList)
  }
    return(
    <div>
      <title>PetShop | shop</title>
      <NavBar></NavBar>
      
    <div className='container'>
      
      <h1>shop</h1>
      <div className="row">
        <div className="col-4">
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
          <Item href={`/shop/${item.id}`} className='col' price={`$${item.price}`} key={item.id} name={item.name} img={item.img} description={item.description}></Item>)
        })}
        <LabelsBar className=''></LabelsBar>
        
      
      </div>
      
    </div>

    </div>
    )
}