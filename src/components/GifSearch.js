import React from "react"

class GifSearch extends React.Component {
    render() {
        return (
            <div id="searchForm">
                <h4>Enter a Search Term:</h4>
                <form >
                    <span className="formtext"></span>
                    <input
                        id="searchInput"
                        name="searchTerm"
                        type="text"
                        placeholder="Please enter a term..."
                        required
                    />
                </form>
                <button id="searchBtn" onClick={(event) => this.props.handleClick(event)}>Find Gifs</button>
            </div>
        );
    }
}

export default GifSearch