import {React, useEffect, useState} from "react"
import Typeahead from "./Typeahead"

function Search({onSearch}) {
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        document.addEventListener('keydown', handleKeypress);

        return function cleanup() {
            document.removeEventListener('keydown', handleKeypress);
        }
    }, [searchValue]);

    function handleKeypress(e) {
        let key = e.keyCode;

        switch(key) {
            case 13: // enter
                handleSearch(e);
                break;
        }
    }

    function handleSearch(e) {
        e.preventDefault();

        fetch(`/resources/search?term=${searchValue}`)
        .then(response => response.json())
        .then(json => onSearch(json));
    }

    return (
        
        <form onSubmit={handleSearch}>
            <div className="input-group">
                <Typeahead searchValue={searchValue} setNewSearchValue={setSearchValue}/>
                <input id="search" type="submit" className="btn btn-primary" />
            </div>
        </form>
        
    );
}

export default Search