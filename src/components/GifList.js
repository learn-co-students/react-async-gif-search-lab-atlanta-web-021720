import React from "react"

const GifList = (props) => {
    return (
        <div>
            <ul>
                {props.allGifs.map(gif => {
                    return <li><img src={gif.images.original.url} alt={gif.id} height="300" width="300"></img></li>
                })}
            </ul>
        </div>
    )
}

export default GifList