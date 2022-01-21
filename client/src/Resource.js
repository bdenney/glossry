import React from "react"
import TagBar from "./TagBar";

function Resource({resource}) { 
    let typeIcon = ''
    switch (resource.type) {
        case 1:
            typeIcon = './images/flatiron-icon.png';
            break;
        default:
        case 0:
            typeIcon = './images/web.png';
            break;
    }
        
    return(
        <div className="card">
            <div className="card-body">
                <div className="card-title">
                    <h5>{resource.title}</h5>
                </div>
                <p className="card-text">{resource.description}</p>
                <div className="d-flex align-items-center">
                    <img src={require( `${typeIcon}` )} style={{height: 25, width: 25}}></img>
                    <a href={resource.link} className="card-link mx-2">{resource.link}</a>
                    <TagBar tags={resource.tags}/>
                </div>
            </div>
        </div>
    );
}

export default Resource