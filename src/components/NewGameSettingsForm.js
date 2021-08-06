import React from "react";
import "./SettingsForm.css";
import { useHistory } from "react-router-dom";

import TimeSelectComponent from "./TimeSelectComponent";
import LevelSelectComponenet from "./LevelSelectComponent";
import SideSelectComponent from "./SideSelectComponent";

const NewGameSettingForm = () => {
  const history = useHistory();

  const handleOnClick = () =>
  {
    history.push("/newgame");
  }
  return (
    <form>
      <div className="new-settings__controls">
        <SideSelectComponent></SideSelectComponent>
        <TimeSelectComponent></TimeSelectComponent>
        <LevelSelectComponenet></LevelSelectComponenet>
      </div>
      <div className="new-settings__actions">
        <button type="submit" onClick={handleOnClick}>Start</button>
      </div>
    </form>
  );
};
export default NewGameSettingForm;
