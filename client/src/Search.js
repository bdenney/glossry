import {React, useState} from "react"
import Typeahead from "./Typeahead"

function Search({onSearch}) {

    const [searchValue, setSearchValue] = useState('');

    function handleSearch(e) {
        e.preventDefault();

        fetch(`/resources/search?term=${e.target.query.value}`)
        .then(response => response.json())
        .then(json => onSearch(json));
    }

    return (
        
        <form onSubmit={handleSearch}>
            <div className="input-group">
                {/* <input id="query" type="search" placeholder="Search..." className="form-control" /> */}
                <Typeahead/>
                <input id="search" type="submit" className="btn btn-primary" />
            </div>
        </form>
        
    );
}

export default Search