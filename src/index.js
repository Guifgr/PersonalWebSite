import React from 'react';
  import ReactDOM from 'react-dom';
import Header from './components/Header';
import Main from './/components/Main';
import Section from './components/Section';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./index.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Section />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
