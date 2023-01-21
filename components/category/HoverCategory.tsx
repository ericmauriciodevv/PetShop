type propsHoverCategory = {
    style: any
    description: string
}
const HoverCategory =(props : propsHoverCategory) => {
    return(
        <>
        <p className="text-secondary">{props.description}</p>
        <button className="btn bg-info" style={props.style}>See more</button>
        </>
    )
}

export default HoverCategory