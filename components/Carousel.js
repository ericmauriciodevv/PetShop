import { useState } from "react"

export default function Carousel() {
    const images = ['', '', '']
    const [selectedIndex, setSelectedIndex]= useState(0)
    const [selectedImage, setSelectedImage]= useState(images[0])

    const previus = () =>{
        const condition = setSelectedIndex > 0
        const nextIndex = condition ? selectedIndex - 1 : images.length = -1
        setSelectedImage(images[nextIndex])
        setSelectedIndex(nextIndex)
    }

    const next = () => {
        const condition = setSelectedIndex < images.length
        const nextIndex = condition ? selectedIndex + 1 : 0;
        setSelectedImage(images[nextIndex])
        setSelectedIndex(nextIndex)
    }
    return(
        <div>
            <img src={''}></img>
            <button className="btn" onClick={previus}>{"<"}</button>
            <button className="btn" onClick={next}>{">"}</button>
            
        </div>
    )
}