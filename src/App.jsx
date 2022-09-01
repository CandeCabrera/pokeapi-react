import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import PokeCards from './components/PokeCards';

function App() {
  

  return (
    <div className="App">
      <figure className="pulse">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" height="300px" alt="" />
      </figure>
      <div className="cardsContainer">
      
        <PokeCards/>
      </div>
    </div>
  )
}

export default App
