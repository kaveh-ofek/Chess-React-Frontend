import MainMenuButton from "../components/MainMenuButton";
import "../components/TitleStyling.css";
import Header from "../components/Header";
import { FaChess } from "react-icons/fa";

const WelcomePage = () => {
  return (
    <div>
      <Header></Header>
      <div className="main-title">Chess</div>
      <div className="sub-title">Made with Java and React.js</div>
      <div className='chess-icon'><FaChess color="#e4e4e4" size="6rem" ></FaChess></div>
      <MainMenuButton></MainMenuButton>
    </div>
  );
};
export default WelcomePage;
