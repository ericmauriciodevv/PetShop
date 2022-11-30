export default function Category({category, img}){
    return(
        <div className="rounded-circle w-25 text-center">
            <img className="rounded-circle mb-1 img-opacity-75" src={img} width='200' height='200' ></img>
            <p className="h6 pl-3 ">{category}</p>
         </div>
    )
}