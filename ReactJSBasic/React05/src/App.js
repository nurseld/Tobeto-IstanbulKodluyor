//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header.js";
import Variables from './components/Variables.js';
import Props from './components/Props.js';
import Loops from './components/Loops.js';
import UserDetail from './components/UserDetail.js';
import UsingState from './components/UsingState.js';
import StateArray from './components/StateArray.js';
import StateObject from './components/StateObject.js';
import StateInput from './components/StateInput.js';
import StateInput2 from './components/StateInput2.js';
import UsingUseEffect from './components/UsingUseEffect.js';
import MountUnmount from './components/MountUnmount.js';
import UsingCss from './components/UsingCss.js';
import UsingCssModule from './components/CssModule/UsingCssModule.js';

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

  const [isVisible, setIsVisible] = useState(true);

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

      {/* <StateArray /> */}

      {/* <StateObject /> */}

      {/* <StateInput /> */}

      {/* <StateInput2 /> */}

      {/* <UsingUseEffect /> */}

      {/* <div>

        {isVisible && <MountUnmount />}
        <button onClick={() => setIsVisible(!isVisible)}>Göster/Gizle MountUnmount Component</button>

      </div> */}

      {/* <UsingCss /> */}

      <UsingCssModule />

    </div>


  );
}

export default App;
