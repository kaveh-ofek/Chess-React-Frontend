import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import "../components/TitleStyling.css";
import Board from "../components/Board";
import {Game} from "./logic/Game";

const PracticePage = () => {

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

    if (time === '')
    {
        time=parseInt('10');
    }

    return (
        <div>
            <Header></Header>
            <div className='board'>
            <Board></Board>
            </div>
        </div>
    )
}

export default PracticePage;