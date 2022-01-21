import React from "react"
import Tag from "./Tag";

function TagBar({ tags }) {
    return(
        <div className="d-flex">
            {
                tags.map(tag => {
                    return <Tag key={tag.id} tag={tag}/>
                })
            }
        </div>
    );
}

export default TagBar