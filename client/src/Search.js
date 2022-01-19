import React from "react"

function Search({onSearch}) {

    function handleSearch(e) {
        e.preventDefault();

        fetch(`/resources/search?term=${e.target.query.value}`)
        .then(response => response.json())
        .then(json => onSearch(json));
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input id="query" type="text"/>
                <input id="search" type="submit"/>
            </form>
        </div>
    );
}

export default Search