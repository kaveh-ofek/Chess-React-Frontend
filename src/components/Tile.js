import "./Tile.css";


const Tile = (props) => {
    if (props.number % 2 === 0)
    {
        return (
            <div className='black-tile'></div>
        )
    }
    else
    {
        return (
            <div className='white-tile'></div>
        )
    }
}
export default Tile;