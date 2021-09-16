import React, { useState } from "react"
import Twenty from '../img/Twenty-One-Pilots-Logo.png';
import TwentyMini from '../img/Twenty-One-Pilots-LogoMini.png';

function Footer(){
    const [count, setCount] = useState(0.2);
    var display = "none"
    // eslint-disable-next-line default-case
    if(count>1){
        display = "block"
        scroll()
    }
    return(
        <footer>
            <p style={{textAlign: "center"}}>
            <img loading="eager" src={TwentyMini} alt="music" style={{
                opacity: count, 
                height: "30px",
                }} onClick={() => setCount(count + 0.3)}></img>
             Guifgr © {(new Date().getFullYear())}            
            </p>
            <img loading="eager" src={Twenty} alt="music" style={{
                position: "fixed",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
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