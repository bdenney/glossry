import React from "react"

function Search({onSearch}) {

    function handleSearch(e) {
        e.preventDefault();

        fetch(`/resources/search?term=${e.target.query.value}`)
        .then(response => response.json())
        .then(json => onSearch(json));
    }

    return (
        
        <form onSubmit={handleSearch}>
            <div className="input-group mb-3">
                <input className="form-control" id="query" type="text"/>
                <input className="btn btn-primary" id="search" type="submit"/>
            </div>
        </form>
        
    );
}

export default Search