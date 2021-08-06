import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import "../components/TitleStyling.css";

const PracticePage = () => {
    const history = useHistory();

    let side = history.location.state.side;
    if (side === '1')
    {
        side = 'white';
    }
    else{
        side = 'black'
    }
    const time = parseInt(history.location.state.time);

    if (side === '' || isNaN(time))
    {
        history.push('/practice_settings');
    }

    return (
        <div>
            <Header></Header>
            <div className='sub-title'>{side}</div>
            <div className='sub-title'>{time}</div>
        </div>
    )
}

export default PracticePage;