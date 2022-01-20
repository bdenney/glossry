import React from "react"
import Resource from "./Resource"

function ResourceList({ resources }) {
    return (
        <div className="container">
            {
                resources.map((resource, index) => {
                    return (
                        <Resource key={resource.id} resource={resource} />
                    )
                })
            }
        </div>
    );
}

export default ResourceList