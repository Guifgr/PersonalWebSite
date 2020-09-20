import React from "react"
import Header from './components/Header';
import Main from './/components/Main';
import Section from './components/Section';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App(){
    return(
        <div className="Wrapper">
            <Header />
            <Main />
            <Section />
            <Contact />
            <Footer />
        </div >
    )
}

export default App;