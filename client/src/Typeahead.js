import {React, useState} from "react"

function Typeahead({searchValue, setNewSearchValue}) {
    const [results, setResults] = useState([]);

    function handleEntry(e) {
        let text = e.target.value
        setNewSearchValue(text)

        if (!text) {
            setResults([]);
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
            <input type="search" onChange={handleEntry} className="form-control" />
            <div id="typeaheadResults" className="typeaheadResults">
                {
                    <ul className="list-group typeaheadlist">
                    {
                        results.map(tag => {
                            return <li key={tag.id} className="list-group-item">{tag.name}</li>
                        })
                    }
                    </ul>
                }
            </div>
        </>
    );
}

export default Typeahead