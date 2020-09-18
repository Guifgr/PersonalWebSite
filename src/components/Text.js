import React from "react"
import Icons from "./Icons"


function Text(){
    return(
        <div className="half" style={{float:"left",  marginLeft:"15%", width:"34.5%"}}>
            
                <p style={{marginTop:"0", marginBottom:"1vh"}}>Me chamo Guilherme atualmente estudo na Universidade de Mogi das Cruzes mas passei pela  Universidade tecnológica do Paraná,
                     amo técnologia e todos os dias tento escrever mais uma linha do meu futuro!
                </p>
            
                <p style={{marginBottom:"1vh"}}>Estudo <b>sistemas de Informação</b> e passei por <b>Ciência da Computação</b> adoro estudar programação e quando me sinto 
                demotivado crio algo que gostaria de ter feito, assim como esse site que adorei recriar em homenagem ao 
                programador <a style={{color:"black"}} href="https://egermano.com/">Bruno Germano</a> agradeço muito aos meus amigos por estarem ao meu lado programando direta 
                ou indiretamente, pois, estamos programando o futuro de nossas vidas
                </p>
            
                <p style={{marginBottom:"1vh"}}>Atualmente tenho alguns sites no ar como o <a style={{color:"black"}} href="https://chalestriunfo.com.br/">Chalés Triunfo</a> e 
                meu xodó <a style={{color:"black"}} href="https://github.com/Guifgr">GitHub</a> 
                </p>
                
                <p style={{marginBottom:"1vh"}}>Adoro lidar com técnologia seja hardware ou software, desde cedo desmontava tudo que era eletrônico e até hoje gosto do 
                handmade e meu projeto é morar na casa do futuro "risos" 
                </p>
                
                <Icons />
                 
            </div>
    )
}

export default Text;