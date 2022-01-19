import React from "react"

function ResourceForm() {

    function handleSubmit(e) {
        e.preventDefault();

        let form = e.target
        const resourceValues = {
            url: form.url.value,
            title: form.title.value,
            description: form.description.value,
            tags: form.tags.value
        }

        fetch('/resources', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(resourceValues)
        })
        .then(response => response.json())
        .then(json => {console.log(json)})
    }

    return (
        <div>
            <h1>Add New Resource</h1>
            <form onSubmit={handleSubmit} >
                <label for="url">Url</label>
                <input id="url" type="text"></input>

                <label for="title">Title</label>
                <input id="title" type="text"></input>

                <label for="description">Description</label>
                <input id="description" type="textarea"></input>

                <label for="tags">Tags</label>
                <input id="tags" type="text"></input>

                <input type="submit" value="Add"></input>
            </form>
        </div>
    );
}

export default ResourceForm