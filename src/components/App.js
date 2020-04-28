import React from 'react'
import GifSearch from './GifSearch'
import NavBar from './NavBar'
import GifList from './GifList'

// the App component should render out the GifListContainer component 

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      allGifs: []
    }
  }

  handleClick = (event) => {
    event.preventDefault()
    const searchTerm = event.target.parentElement.querySelector("#searchInput").value
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ allGifs: data.data.slice(0, 3) })
      })
  }
  render() {
    console.log("Current gifs:", this.state.allGifs)
    return (
      <div>
        <NavBar color='black' title="Giphy Search" />
        <GifSearch handleClick={this.handleClick} />
        <GifList allGifs={this.state.allGifs} />
      </div >
    )
  }


}

export default App
