import React from 'react';
import Navbar from "./Navbar"
import NextAdventureButton from "./NextAdventureButton"

function App() {
  return (
    <div className='homeTop' >
    <Navbar/>
    <h3 style={{color:'#ffffff',fontSize:'30px',padding: "0 0 0 50px"}}> Are you Ready?</h3>
    <h3 style={{color:'#ffffff',fontSize:'85px',padding: "0 0 0 50px"}}>Your next career<br/> starts with an <br/> adventure</h3>
    <NextAdventureButton/>
    </div>
  );
}

export default App;
