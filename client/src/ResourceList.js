import React from "react"
import Resource from "./Resource"

function ResourceList({ resources }) {
    return (
        <div>
            {
                resources.map(resource => {
                    return <Resource key={resource.id} resource={resource} />
                })
            }
        </div>
    );
}

export default ResourceList