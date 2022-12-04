import { items } from "../items"
import Item from "../components/item"
import NavBar from "../components/NavBar"
import LogIn from "../components/LogIn"

export default function shop() {

    return(
    <div>
      <title>PetShop | shop</title>
      <NavBar></NavBar>
      
    <div className='container'>
      
      <h1>shop</h1>

      <div className="row align-items-start justify-content-center">
        {items.map(function(item){
          return(<Item href={`/shop/${item.id}`} className='col' price={`$${item.price}`} key={item.id} name={item.name} img={item.img} description={item.description}></Item>)
        })}
        
      
      </div>
      
    </div>

    </div>
    )
}