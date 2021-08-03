import "./MainMenuButton.css";

const MainMenuButton = () => {
  return (
    <div>
      <div className="button-location">
        <button className="button" style={{ verticalAlign: "middle" }}>
          <span>New Game </span>
        </button>
        <button className="button" style={{ verticalAlign: "middle" }}>
          <span>Practice </span>
        </button>
      </div>
    </div>
  );
};

export default MainMenuButton;
