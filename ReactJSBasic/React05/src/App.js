//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import Variables from './components/Variables.js';
import Props from './components/Props.js';
import Loops from './components/Loops.js';
import UserDetail from './components/UserDetail.js';
import UsingState from './components/UsingState.js';
import StateArray from './components/StateArray.js';

const _info = {

  title: "Lorem, ipsum dolor.",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rem blanditiis similique."

}

const users = [

  {
    id: 100,
    name: "Leanne Graham",
    username: "Bret",
    company: "Romaguera-Crona"
  },

  {
    id: 101,
    name: "Ervin Howell",
    username: "Antonette",
    company: "Deckow-Crist"
  },

  {
    id: 102,
    name: "Clementine Bauch",
    username: "Samantha",
    company: "Romaguera-Jacobson"
  },

];

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

      {/* <Props name={"Nursel"} surname={"Demirkiran"} age={27} developer={true} info={_info} /> */}

      {/* <Loops users={users} /> */}

      {/* <UserDetail name={"Nursel Demirkıran"} age={"27"} hobbies={["book", "guitar", "coding"]} address={{ detail: "address", zipcode: 59500 }} /> */}

      {/* <UsingState /> */}

      <StateArray />

    </div>

  );
}

export default App;
