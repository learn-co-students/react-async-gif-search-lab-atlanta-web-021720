import React from 'react'

export default class GifList extends React.Component {
    
    renderGifLis = gifArr => gifArr.map( gif => <li><img src={gif.images.original.url}/></li>)
    
    render() {
        return (
            <ul>
                {this.renderGifLis(this.props.gifArr)}
            </ul>
        )
    }
}