import React from "react";
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Konami from 'react-konami-code';

function App(){
    var easterEgg = () => {
        alert('Você acertou o código!');
        alert('Você será redirecionado para editar meu código!');
        alert('Está pronto?');
        alert('Vamos nessa!!!');
        window.location.href = 'https://github.dev/Guifgr/PersonalWebSite'
    }

    return(
        <div className="Wrapper">
            <Header />
            <Main />
            <Skills />
            <Experience />
            <Education />
            <Section />
            <Contact />
            <Footer />
            <Konami action={easterEgg}></Konami>
        </div >
    )
}

export default App;
