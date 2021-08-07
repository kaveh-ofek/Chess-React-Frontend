import React from 'react';
import "./Board.css"
import Tile from "./Tile";
import {Bishop} from "../pages/logic/Bishop";
import {King} from "../pages/logic/King";
import {Knight} from "../pages/logic/Knight";
import {Pair} from "../pages/logic/Pair";
import {Pawn} from "../pages/logic/Pawn";
import {PlayerSpecifier} from "../pages/logic/PlayerSpecifier";
import {Queen} from "../pages/logic/Queen";
import {Rook} from "../pages/logic/Rook";
import { GameBoard } from '../pages/logic/GameBoard';

const cols = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


const board = () => {

    let gameBoard = new GameBoard();
    let graphicBoard = []
    for(let j = cols.length - 1; j >= 0; j--)
    {
        for(let i = 0; i < rows.length; i++)
        {
            let image = "icons/pawn_b.png";
            graphicBoard.push(<Tile number={i + j + 2} img={image}></Tile>)
        }
    }

    //coordinate in this 1dim array:  location= y * 8 + (x + 1)

    return (
        <div className='chess-board'>
            {graphicBoard}
        </div>
    )
}

export default board;