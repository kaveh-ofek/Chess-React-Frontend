import "./MainMenuButton.css";
import { useHistory } from "react-router-dom";



const MainMenuButton = () => {

  const history = useHistory();

  const handleNewGame = () => {
    history.push("/newgame_settings");
  }

  const handlePractice = () => {
    history.push("/practice_settings");
  }

  return (
    <div>
      <div className="button-location">
        <button className="button" onClick={handleNewGame} style={{ verticalAlign: "middle" }}>
          <span>New Game </span> 
        </button>
        <button className="button" onClick={handlePractice} style={{ verticalAlign: "middle" }}>
          <span>Practice </span>
        </button>
      </div>
    </div>
  );
};

export default MainMenuButton;
