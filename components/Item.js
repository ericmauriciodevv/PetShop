export default function Item ({img, name, description, price}) {
    return(
        <div className="border rounded-3 p-2 mb-4 ml-4 p-4 w-25">
            
            <img className="" src={img} width='200' height='200'></img>
            <h3>{name}</h3>
            <p>{description}</p>
            <p className="h5 text-danger">{price}</p>
            <button className="btn bg-info">Get</button>
        </div>
    )
}