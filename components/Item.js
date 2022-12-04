

export default function Item ({img, name, description, price, href}) {
    return(
        <div className="d-inline border rounded-3 p-2 mb-4 mx-2 p-4 w-25">
            <div className="justify-content-center">
            <img className="" src={img} width='200' height='200'></img>
            <h3>{name}</h3>
            <p>{description}</p>
            <p className="h5 text-secondary">{price}</p>
            <a href={href}  className="btn px-4 bg-info">Get</a>

            </div>
        </div>
    )
}