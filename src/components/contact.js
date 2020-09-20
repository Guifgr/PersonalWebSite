import React from "react"
import SpacedText from "./microComponents/SpacedText"
import BigText from "./microComponents/BigText"
import formPhp from "../php/contactform.php"
function Contact(){
    return(
        <div style={theSection}>
            <SpacedText text="CONTATO"/>
            
            <BigText marginBottom="1vh" color="white" text="Entre em contato!"/>
            
            <p style={p}>Mande um email caso precise de mais alguma informação, comentário sobre projeto, orçamentos ou até mesmo para marcar um café!</p>
            
            <form method="post" action={formPhp}>
                <div  style={FormLineStyle} className="formLine">
                    <input className="half" style={inputStyle} type="text" id="nome" placeholder="Nome" title="nome" name="nome"></input>
                    <input className="half" style={inputStyle} type="text" id="sobrenome" placeholder="Sobrenome" title="sobrenome" name="sobrenome"></input>
                </div>
                <div  style={FormLineStyle} className="formLine">
                    <input className="half" style={inputStyle} type="text" id="email" placeholder="Email" title="email" name="email"></input>
                    <input className="half" style={inputStyle} type="text" id="telefone" placeholder="Telefone" title="telefone" name="telefone"></input>
                </div>

                <div style={text}>
                    <textarea rows="7" className="full" style={textarea} placeholder="Escreva aqui sua mensagem..." name="message"  id="messageText" ></textarea>
                </div>

                <div style={btnDiv}>
                    <input style={btn} type="submit"></input>
                </div>


            </form>

        </div>
    )
}

const theSection={
    backgroundColor: "#262626",
    padding: "3rem 1.5rem",
    overflow: "visible"
}

const p={
    color: "white",
    textAlign:"center",
}
const text={
    display: "flex",
    justifyContent: "center",
    marginTop: "4vh",
}

const textarea={
    width: "30.5%",
}
const btn={
    fontSize:" .875rem",
    fontWeight:" 400",
    lineHeight:" 1.125rem",
    letterSpacing:" .16px",
    position:" relative",
    display:" inline-flex",
    flexShrink:" 0",
    alignItems:" center",
    justifyContent:" space-between",
    maxWidth:" 20rem",
    minHeight:" 3rem",
    margin:" 0",
    padding:" calc(.875rem - 3px) 63px calc(.875rem - 3px) 15px",
    textAlign:" left",
    textDecoration:" none",
    verticalAlign:" top",
    borderRadius:" 0",
    outline:" none",
    cursor:" pointer",
    transition:" all 70ms cubic-bezier(0,0,.38,.9)",
    color: "#fff",
    backgroundColor: "#0f62fe",
    border: "1px solid transparent",
}

const btnDiv={
    marginTop: "4vh",
    display: "flex",
    justifyContent: "center"
}

const FormLineStyle={
    display: "flex",
    justifyContent: "center",
    marginTop: "4vh",
}

const inputStyle={
    height: "50px",
    width: "14%",
    marginLeft: "1%",
    marginRight: "1%",
}
export default Contact;