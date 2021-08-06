import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import "../components/TitleStyling.css";

const NewGamePage = () => {
    const history = useHistory();

    let side = history.location.state.side;
    if (side === '1')
    {
        side = 'white';
    }
    else
    {
        side = 'black'
    }
    const time = parseInt(history.location.state.time);
    const level = parseInt(history.location.state.level);

    if (side === '' || isNaN(time) || isNaN(level))
    {
        history.push('/newgame_settings');
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