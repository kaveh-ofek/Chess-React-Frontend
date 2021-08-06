import React, { useState } from "react";
import "./SettingsForm.css";
import { useHistory } from "react-router-dom";
import { FaClock, FaChessKing } from "react-icons/fa";

const PracticeSettingForm = () => {
  const history = useHistory();
  const [selectedSide, setSide] = useState("");
  const [selectedTime, setTime] = useState("");

  const whiteSideChangeHandler = (event) => {
    if (selectedSide === '')
    {
      event.target.style.backgroundColor = "rgb(2, 48, 109)"
      setSide("1");
    }
  };

  const blackSideChangeHandler = (event) => {
    if (selectedSide === '')
    {
      event.target.style.backgroundColor = "rgb(2, 48, 109)"
      setSide("2");
    }
  };

  const timeChangeHandler = (event) => {
    setTime(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      side: selectedSide,
      time: selectedTime,
    };
    console.log(formData);
    history.push({ pathname: "/practice", state: formData });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-settings__controls">
        <div className="new-settings__control">
          <div>Choose Your Side:</div>
          <button id='white'
            className="white-button"
            onClick={whiteSideChangeHandler} type='button'
          >
            <FaChessKing color="white" size="2rem"></FaChessKing>
          </button>
          <button id='black'
            className="black-button"
            onClick={blackSideChangeHandler} type='button'
          >
            <FaChessKing color="black" size="2rem"></FaChessKing>
          </button>
        </div>

        <div>
          <div>
            <FaClock color="#2c2c2c" size="1.5rem"></FaClock> Time: (1-10)
          </div>
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            onChange={timeChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-settings__actions">
        <button type="submit">Start</button>
      </div>
    </form>
  );
};
export default PracticeSettingForm;
