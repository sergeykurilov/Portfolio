import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./Mailn/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./myProjects/Projects";
import {Hire} from "./Hire/Hire";
import {Contacts} from "./contacts/contacts";
import {Footer} from "./footer/footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <Hire/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
