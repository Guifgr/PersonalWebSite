import React, { useState } from "react"
import Twenty from '../img/Twenty-One-Pilots-Logo.png';

function Footer(){
    const [count, setCount] = useState(0.1);
    var display = "none"
    // eslint-disable-next-line default-case
    if(count>1){
        display = "block"
        scroll()
    }
    return(
        <footer>
            <p style={{textAlign: "center"}}>Todos os direitos reservados © Guifgr {(new Date().getFullYear())}
            <img loading="eager" src={Twenty} alt="music" style={{opacity: count, height: "30px",left: "100px",}} onClick={() => setCount(count + 0.31)}></img>
            </p>
            <img loading="eager" src={Twenty} alt="music" style={{
                position: "fixed",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                objectFit: "fill",
                display: display,
                zIndex: 10
            }}
            onClick={redirect} 
            ></img>
            
        </footer>
    )
}

function redirect(){
    window.location.href = 'https://music.youtube.com/watch?v=IAVy8gI7HOQ&list=OLAK5uy_mvUlZzN1bqUy4Yor4gBVFcobUCezqPVGc'
}
function scroll(){
    window.scrollTo({
        top: 1000,
        behavior: 'smooth',
      })
}

export default Footer;