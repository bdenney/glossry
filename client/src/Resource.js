import React from "react"

function Resource({resource}) { 
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{resource.title}</h5>
                <p className="card-text">{resource.description}</p>
                <a href={resource.link} class="card-link">{resource.link}</a>
            </div>
        </div>
    );
}

export default Resource