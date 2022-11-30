export default function Category({category, img}){
    return(
        <div className=" p-0 rounded-circle w-25 text-center">
            <img className="shadow rounded-circle mb-1" src={img} width='100' height='100' ></img>
            <p className="h6 pl-3 ">{category}</p>
         </div>
    )
}