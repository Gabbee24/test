import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className='container' >
      <Navbar
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <Body 
        darkMode={darkMode}  
      />

    </div>
  );
}

export default App;
