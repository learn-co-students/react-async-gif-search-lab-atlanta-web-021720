import React, { Component } from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
    state = {
        gifArr: []
    }
    searchHandler = e => {
        e.preventDefault()
        this.setState({ gifArr: []})
        let term = e.target[0].value
        let searchTerm = term.trim().replace(/ /g, "+")
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=XbR3weNP3pNlhbe3leUwseu2OkGRrYeA&limit=3`)
        .then(r => r.json())
        .then(data => this.setState({ gifArr: data.data}))
    }

    render(){
        return (
            <div>
                <GifSearch searchHandler={this.searchHandler}/>
                <GifList gifArr={this.state.gifArr}/>
            </div>
        )
    }
}

//GifSearch willrenders form, receives callback to handle search
//GifList willinclude gif data from state as a prop