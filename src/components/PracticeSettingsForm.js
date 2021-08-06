import React from "react";
import "./SettingsForm.css";
import { useHistory } from "react-router-dom";

import SideSelectComponent from "./SideSelectComponent";
import TimeSelectComponent from "./TimeSelectComponent";

const PracticeSettingForm = () => {

  const history = useHistory();

  const handleOnClick = () =>
  {
    history.push("/practice");
  }

  return (
    <form>
      <div className="new-settings__controls">
        <SideSelectComponent></SideSelectComponent>
        <TimeSelectComponent></TimeSelectComponent>
      </div>
      <div className="new-settings__actions">
        <button type="submit" onClick={handleOnClick}>Start</button>
      </div>
    </form>
  );
};
export default PracticeSettingForm;
