import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import "../components/TitleStyling.css";

const NewGamePage = () => {
    const history = useHistory();

    let side = history.location.state.side;
    if (side === '1' || side === '')
    {
        side = 'white';
    }
    if (side === '2')
    {
        side = 'black';
    }

    let time = history.location.state.time;
    let level = history.location.state.level;

    if (time === '')
    {
        time=parseInt('10');
    }

    if (level === '')
    {
        level=parseInt('5');
    }

    return (
        <div>
            <Header></Header>
            <div className='sub-title'>{side}</div>
            <div className='sub-title'>{time}</div>
            <div className='sub-title'>{level}</div>
        </div>
    )
}

export default NewGamePage;