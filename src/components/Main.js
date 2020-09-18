import React from "react"
import Text from "./Text"
import Picture from "./Picture.js"

function Main(){
     return(
        <main style={{height: "98vh", borderBottom: "10px solid #0f62fe"}}>
            <h5 style={h5}>SOBRE</h5>
            <h5 style={h1}>Hello World!</h5>

            <Text />


            <Picture /> 
            
        </main>
     );
 };

const h5={
    marginTop: "5vh",
    color: "blue",
    textAlign: "center",
    fontSize: "1em",
    fontWeight: '400',
    letterSpacing: "10px",
}
const h1={
    marginTop: "1vh",
    textAlign: "center",
    fontSize: "5vh",
    color: "#4c4c4c",
    marginBottom: "2em"
}
 export default Main;