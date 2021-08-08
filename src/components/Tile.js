import "./Tile.css";


const Tile = (props) => {
    if (props.number % 2 === 0)
    {
        return (
            <div className='white-tile'><img src={props.img} alt=""></img></div>
        )
    }
    else
    {
        return (
            <div className='black-tile'><img src={props.img} alt=""></img></div>
        )
    }
}
export default Tile;