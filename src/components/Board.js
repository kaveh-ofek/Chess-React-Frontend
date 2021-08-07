import React from 'react';
import "./Board.css"
import Tile from "./Tile";

const cols = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


const board = () => {

    let board = []
    for(let j = cols.length - 1; j >= 0; j--)
    {
        for(let i = 0; i < rows.length; i++)
        {
            board.push(<Tile number={i + j + 2}></Tile>)
        }
    }

    //coordinate in this 1dim array:  location= y * 8 + (x + 1)

    return (
        <div className='chess-board'>
            {board}
        </div>
    )
}

export default board;