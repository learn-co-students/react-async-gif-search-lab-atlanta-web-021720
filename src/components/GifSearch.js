import React from 'react'

export default class GifSearch extends React.Component {
    state = {
        search: ''
    }

    handleInput = e => {
        this.setState({
            search: e.target.value
        })
    }


    render() {
        return (
            <form onSubmit={this.props.searchHandler}>
                <input type='text' value={this.state.search} onChange={this.handleInput}/>
                <input type='submit' value='Search'/>
            </form>
        )
    }
}