import "../TitleStyling.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const GitLinkedButtons = () => {

    const GitClickHandler = () => {
        window.open("https://github.com/kaveh-ofek", "_blank");
    }

    const LinkedClickHandler = () => {
        window.open("https://www.linkedin.com/in/ofekkaveh/", "_blank");
    }

  return (
    <div>
      <button
        className="icon-button__git"
        style={{
          position: "absolute",
          left: "53%",
          top: "70%",
          transform: "translate(-50%, -50%)",
        }} onClick={GitClickHandler}
      >
        <FaGithub color="white" size="2rem"></FaGithub>
      </button>
      <button
        className="icon-button__linked"
        style={{
          position: "absolute",
          left: "47%",
          top: "70%",
          transform: "translate(-50%, -50%)",
        }} onClick={LinkedClickHandler}
      >
        <FaLinkedin color="white" size="2rem"></FaLinkedin>
      </button>
    </div>
  );
};

export default GitLinkedButtons;
