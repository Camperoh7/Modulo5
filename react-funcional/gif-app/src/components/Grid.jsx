import React, {useEffect, useState} from "react";
import Item from "./Item";

const Grid = ({category}) => {

    const [images, setImages] = useState([])


    useEffect(() => {
    getGifs(category)
    },[category])

    const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=B3mWEhLFaZ3xHwUv9i6sKQ9qUfvtaIPJ&q=${category}&limit=20`;

        const response = await fetch(url)
        const {data} = await response.json()

        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }))

        setImages(gifs)

    }

    return(
    <>
    
    <h3>{category}</h3>
    <div className="card-grid">
        {images.map(image =>(
            <Item key={image.id} {...image}/>
        ))}
        
    </div>
    </>)
}

export default Grid