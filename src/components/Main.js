import React from "react";
import Text from "./microComponents/Text";
import SpacedText from "./microComponents/SpacedText";
import BigText from "./microComponents/BigText";
import Picture from "./microComponents/Picture";

function Main(){
     return(
        <main style={{height: "95vh", borderBottom: "10px solid #0f62fe"}}>
           
            <SpacedText text="SOBRE" />
            
            <BigText color="#4a4a4a" text="Hello world!" />
            

            <Text />


            <Picture /> 
            
        </main>
     );
 };

 export default Main;