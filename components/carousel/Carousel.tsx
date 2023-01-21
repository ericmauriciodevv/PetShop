import { useState } from "react"
import Image from "next/image"


const CarouselI = () => {
    const [ishover, setIsHover] = useState(false)
    const [imageIndex, setImage] = useState(0)
    const images = ["/img/example1.jpeg", "/img/exmaple2.jpeg", "/img/example3.jpeg"]

    const goNext = () => {
        const nextIndex = imageIndex < images.length - 1 ? imageIndex + 1 : 0
        console.log("Next index: ", nextIndex)
        setImage(nextIndex)
    }
    const goPrevius  = () => {
        const previusIndex = imageIndex > 0 ? imageIndex -1 : images.length -1
        console.log("Next index: ", previusIndex)
        setImage(previusIndex)
    }

    return(
        <>
        <div>
            <Image alt="dogs images" onMouseOver={() => {setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}} src={images[imageIndex]} width={1280} height={600} className="rounded-4 mb-5" ></Image>
            <div onMouseOver={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}} className={ishover ? "opacity-50"  :" bg-ligth opacity-0"} style={{
                backgroundColor: "white",
                position: "absolute",
                top: "130px",
                left: "1265px",
                width: "80px",
                height: "610px",
                }} onClick={goNext}></div>
            <div onMouseOver={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}} className={ishover ? "bg-light opacity-50"  : "bg-ligth opacity-0"}  style={{
                backgroundColor: "white",
                position: "absolute",
                top: "130px",
                left: "60px",
                width: "80px",
                height: "610px",
            }} onClick={goPrevius}></div>
            
            <div>
                <div className={imageIndex === 0 ? "bg-info opacity-100 rounded"  : "bg-ligth opacity-50 rounded"}  style={{
                    backgroundColor: "white",
                    position: "absolute",
                    top: "700px",
                    left: "590px",
                    width: "30px",
                    height: "10px",
                }}></div>
                <div className={imageIndex === 1 ? "bg-info opacity-100 rounded"  : "bg-ligth opacity-50 rounded"}  style={{
                    backgroundColor: "white",
                    position: "absolute",
                    top: "700px",
                    left: "650px",
                    width: "30px",
                    height: "10px",
                }}></div>
                <div className={imageIndex === 2 ? "bg-info opacity-100 rounded"  : "bg-ligth opacity-50 rounded"}  style={{
                    backgroundColor: "white",
                    position: "absolute",
                    top: "700px",
                    left: "705px",
                    width: "30px",
                    height: "10px",
                }}></div>
            </div>
            
        </div>

        </>
    )
}

export default CarouselI