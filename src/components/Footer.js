import React from "react"

function Footer(){
    return(
        <footer>
            <p style={{textAlign: "center"}}>Todos os direitos reservados © Guifgr {(new Date().getFullYear())}</p>
        </footer>
    )
}

export default Footer;