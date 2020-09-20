import React from "react"

function BigText(props){
    return(
        <h5 style={{ marginBottom: props.marginBottom,  marginTop: "1vh", textAlign: "center", fontSize: "5vh", color:props.color}}>{props.text}</h5>
    )

}


export default BigText;