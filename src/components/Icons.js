import React from "react"
import InstaLogo from "../img/instagram.png"
import LinkedInLogo from "../img/linkedin.png"
import gitLogo from "../img/git.png"
function Icons(){
    return(
        <div className="half icon" style={Icon}>
            <div style={iconDiv}>
                <a href="https://github.com/Guifgr">
                    <img className="imgIcon" style={iconImg} src={gitLogo}></img>
                </a>
            </div>
        
        <div style={iconDiv}>
                <a href="https://www.linkedin.com/in/guifgr/">
                    <img className="imgIcon" style={iconImg} src={LinkedInLogo}></img>
                </a>
            </div>

            <div style={iconDiv}>
                <a href="https://www.instagram.com/guifgr/">
                    <img className="imgIcon" style={iconImg} src={InstaLogo}></img>
                </a>
            </div>

        </div>
    );
}

const Icon={
    width:"100%",
}

const iconImg={
    marginTop:"3vh",
    width: "12%"
}
const iconDiv={
    marginTop:"1vh",
}
export default Icons;