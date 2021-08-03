import React from 'react';
import MainMenuButton from './components/MainMenuButton';
import './TitleStyling.css';



function App() {
  return (
    <div className ='background-image'>
      <div className='main-title'>Ofek's Chess Game</div>
      <div className='sub-title'>This game is made with Java and React.js</div>
      <MainMenuButton></MainMenuButton>
    </div>
  );
}

export default App;
