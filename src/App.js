import MainMenuButton from "./components/MainMenuButton";
import GitLinkedButtons from "./components/GitLinkedButtons";
import "./TitleStyling.css";
import React from "react";


function App() {
  return (
    <div className="background-image">
      <div className="main-title">Ofek's Chess Game</div>
      <div className="sub-title">This game is made with Java and React.js</div>
      <MainMenuButton></MainMenuButton>
      <GitLinkedButtons></GitLinkedButtons>
    </div>
  );
}

export default App;
