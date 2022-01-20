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
            <button data-bs-target="#new_form" data-bs-toggle="collapse" className="btn-secondary">Add New Resource</button>
            <form onSubmit={handleSubmit} id="new_form" className="collapse" >
                <label htmlFor="url" className="form-label">Url</label>
                <input className="form-control" id="url" type="text"></input>

                <label htmlFor="title" className="form-label">Title</label>
                <input className="form-control" id="title" type="text"></input>

                <label htmlFor="description" className="form-label">Description</label>
                <input className="form-control" id="description" type="textarea"></input>

                <label htmlFor="tags" className="form-label">Tags</label>
                <input className="form-control" id="tags" type="text"></input>

                <input className="btn  btn-primary" type="submit" value="Add"></input>
            </form>
        </div>
    );
}

export default ResourceForm