//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./components/Header.js";

function App() {
  return (

    <React.Fragment>
      <Header/>
      <p className='App'>Hello World!</p>
      <label htmlFor = "myinput">
        Name
        <input id = "myinput"></input>
      </label>
    </React.Fragment>

  );
}

export default App;
