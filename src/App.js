import React from "react"
import Header from './components/Header';
import Main from './/components/Main';
import Section from './components/Section';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Konami from 'react-konami-code';


function App(){
    var easterEgg = () => {
        alert('Você acertou o código!');
        alert('Você será redirecionado para editar meu código!');
        alert('Está pronto?');
        alert('Certeza?');
        alert('Vamos nessa!!!');
        window.location.href = 'https://github.dev/Guifgr/PersonalWebSite'
      }
    return(
        <div className="Wrapper">
            <Header />
            <Main />
            <Section />
            <Contact />
            <Footer />
            <Konami action={easterEgg}></Konami>
        </div >
    )
}

export default App;