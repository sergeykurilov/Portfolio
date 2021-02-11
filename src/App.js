import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./Mailn/Main";
import {Skills} from "./skills/Skills";
import {MyWorks} from "./myWorks/myWorks";
import {HireMe} from "./hireMe/hireMe";
import {Contacts} from "./contacts/contacts";
import {Footer} from "./footer/footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <MyWorks/>
      <HireMe/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
