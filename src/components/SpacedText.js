import React from "react"

function SpacedText(props){
    return(
        <h5 style={h5}>{props.text}</h5>
    )
}

const h5={
    marginTop: "5vh",
    color: "blue",
    textAlign: "center",
    fontSize: "1em",
    fontWeight: '400',
    letterSpacing: "10px",
}

export default SpacedText;