import React from "react"
import Icons from "./Icons"


function Text(){
    return(
        <div className="half" style={{float:"left",  marginLeft:"15%", width:"34.5%"}}>
            
                <p style={{marginTop:"0", marginBottom:"1vh"}}>Me chamo Guilherme atualmente estudo na Universidade de Mogi das Cruzes,
                     amo tecnologia, trabalho como <a style={{color:"black"}} href="https://dev.to/guifgr">Dev Back-end</a> na <a style={{color:"black"}} href="https://wlssistemas.com.br/">WLS Sistemas</a>, um dos meus maiores hobbies é basquete e automação.
                </p>
            
                <p style={{marginBottom:"1vh"}}>Estudo <b>Sistemas de Informação</b> e passei por <b>Ciência da Computação</b>, adoro estudar programação e quando me sinto 
                desmotivado sempre penso em como eu poderia solucionar algum problema do dia a dia.
                </p>
            
                <p style={{marginBottom:"1vh"}}>Atualmente tenho alguns sites no ar como o <a style={{color:"black"}} href="https://chalestriunfo.com.br/">Chalés Triunfo</a> e 
                muitos outros projetos no <a style={{color:"black"}} href="https://github.com/Guifgr">GitHub</a>.
                </p>
                
                <p style={{marginBottom:"1vh"}}>Adoro lidar com tecnologia seja hardware ou software, desde cedo desmontava tudo que era eletrônico e até hoje gosto do 
                handmade e sonho em morar em uma casa automatizada, pois a vida é um projeto DIY!
                </p>
                
                <Icons />
                 
            </div>
    )
}

export default Text;