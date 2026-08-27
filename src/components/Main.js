import React from "react";
import Text from "./microComponents/Text";
import SpacedText from "./microComponents/SpacedText";
import BigText from "./microComponents/BigText";
import Picture from "./microComponents/Picture";

function Main(){
     return(
        <main style={{minHeight: "95vh", borderBottom: "1px solid var(--border)"}}>

            <SpacedText text="SOBRE" />

            <BigText color="var(--text-secondary)" text="Hello world!" />

            <div style={{ display: "flex", flexWrap: "wrap", marginTop: "2rem" }}>
                <Text />
                <Picture />
            </div>

        </main>
     );
 };

 export default Main;
