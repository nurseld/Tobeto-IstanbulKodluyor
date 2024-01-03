//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import Variables from './components/Variables.js';
import Props from './components/Props.js';

const _info = {

  title: "Lorem, ipsum dolor.",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rem blanditiis similique."

}

function App() {
  return (

    // <React.Fragment>
    //   <Header/>
    //   <p className='App'>Hello World!</p>
    //   <label htmlFor = "myinput">
    //     Name
    //     <input id = "myinput"></input>
    //   </label>
    // </React.Fragment>

    <div>
      {/* <Variables /> */}

      <Props name={"Nursel"} surname={"Demirkiran"} age={27} developer={true} info={_info} />

    </div>

  );
}

export default App;
