import {React, useState, useEffect} from "react"

function Typeahead({searchValue, setNewSearchValue}) {
    const [results, setResults] = useState([]);
    const [selectedItem, setSelectedItem] = useState(-1);

    
    let resultList = document.getElementById("typeaheadResults");

    useEffect(() => {
        let searchField = document.getElementById("searchField");
        searchField.addEventListener('keydown', handleKeypress);

        return function cleanup() {
            searchField.removeEventListener('keydown', handleKeypress);
        }
    }, [results, selectedItem]);

    function handleKeypress(e) {
        let key = e.keyCode;
        let newItem = selectedItem;
        let shouldHandle = true;

        switch(key) {
            case 38: // up arrow
                newItem -= 1;
                break;
            case 40: // down arrow
                newItem += 1;
                break;
            default:
                shouldHandle = false;
                break;
        }

        if (shouldHandle && results.length > 0) {

            // bounds correction
            if (newItem < 0) {
                newItem = results.length - 1;
            } else if (newItem >= results.length) {
                newItem = 0;
            }

            // highlight the correct one
            highlightOption(selectedItem, newItem);

            // set our variable to the new item
            setSelectedItem(newItem);

            // update the search field as well
            setNewSearchValue(results[newItem].name); 
        }
    }

    function highlightOption(prev, curr) {
        if (selectedItem >= 0) {
            // clear current selection
            resultList.children[prev].className = "dropdown-item";
        }

        // higlight next option
        resultList.children[curr].className = "dropdown-item active";
    }

    function handleEntry(e) {
        let text = e.target.value
        setNewSearchValue(text)

        if (!text) {
            // text was cleared
            setResults([]);

            // reset highlight as well
            setSelectedItem(-1);

        } else {

            fetch('/tags/search', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ term: text })
            })
            .then(resp => resp.json())
            .then(json => {
                setResults(json)
            })
            .catch(err => console.error(err));
        }
    }

    return (
        <>
            <input id="searchField" type="search" onChange={handleEntry} className="form-control" value={searchValue}/>
            <ul id="typeaheadResults" className="typeaheadResults dropdown-menu">
                {
                    results.map(tag => {
                        return <li key={tag.id} className="dropdown-item">{tag.name}</li>
                    })
                }
            </ul>
        </>
    );
}

export default Typeahead