import React from "react"

const TAG_COLORS = [
    '#7bcbfa', // blue
    '#ec6863', // red
    '#fae473'  // yellow
]

function Tag({tag}) {

    function colorForTag(tag) {
        const hashString = tag.name
            .split('')
            .map((char) => char.charCodeAt(0))
            .reduce((a,b) => a + b);
        return TAG_COLORS[hashString % TAG_COLORS.length]
    }

    const color = colorForTag(tag);

    return(
        <p className="my-1 mx-1 p-1 rounded-pill" style={{background: color, color:"white"}}>{tag.name}</p>
    )
}

export default Tag