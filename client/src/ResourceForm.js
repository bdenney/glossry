import React from "react"

function ResourceForm() {
    return (
        <div>
            <h1>Add New Resource</h1>
            <form>
                <label for="url">Url</label>
                <input id="url" type="text"></input>

                <label for="title">Title</label>
                <input id="title" type="text"></input>

                <label for="description">Description</label>
                <input id="description" type=""></input>

                <label for="tags">Tags</label>
                <input id="tags" type="textarea"></input>

                <input type="submit" value="Add"></input>
            </form>
        </div>
    );
}

export default ResourceForm