import React from "react";
import Text from "./Text";
import SpacedText from "./SpacedText";

import Picture from "./Picture.js";

function Main(){
     return(
        <main style={{height: "92vh", borderBottom: "10px solid #0f62fe"}}>
            <SpacedText text="SOBRE" />
            <h5 style={h1}>Hello World!</h5>

            <Text />


            <Picture /> 
            
        </main>
     );
 };


const h1={
    marginTop: "1vh",
    textAlign: "center",
    fontSize: "5vh",
    color: "#4c4c4c",
}
 export default Main;