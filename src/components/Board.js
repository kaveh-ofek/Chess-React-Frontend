import React from 'react';
import "./Board.css"
import Tile from "./Tile";
import {PlayerSpecifier} from "../pages/logic/PlayerSpecifier";
import { GameBoard } from '../pages/logic/GameBoard';

const cols = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


const board = () => {

    let gameBoard = new GameBoard().gameBoard;
    let graphicBoard = []
    for(let j = 0; j < cols.length; j++)
    {
        for(let i = 0; i < rows.length; i++)
        {
            let image;
            if (gameBoard[j][i] === null)
            {
                image = null;
            }
            else if(gameBoard[j][i].playerNumber === PlayerSpecifier.FIRST)
            {
                if (gameBoard[j][i].constructor.name === 'Pawn')
                {
                    image = "icons/pawn_w.png";
                }
                if (gameBoard[j][i].constructor.name === 'Knight')
                {
                    image = "icons/knight_w.png";
                }
                if (gameBoard[j][i].constructor.name === 'Bishop')
                {
                    image = "icons/bishop_w.png";
                }
                if (gameBoard[j][i].constructor.name === 'Rook')
                {
                    image = "icons/rook_w.png";
                }
                if (gameBoard[j][i].constructor.name === 'Queen')
                {
                    image = "icons/queen_w.png";
                }
                if (gameBoard[j][i].constructor.name === 'King')
                {
                    image = "icons/king_w.png";
                }
            }

            else
            {
                if (gameBoard[j][i].constructor.name === 'Pawn')
                {
                    image = "icons/pawn_b.png";
                }
                if (gameBoard[j][i].constructor.name === 'Knight')
                {
                    image = "icons/knight_b.png";
                }
                if (gameBoard[j][i].constructor.name === 'Bishop')
                {
                    image = "icons/bishop_b.png";
                }
                if (gameBoard[j][i].constructor.name === 'Rook')
                {
                    image = "icons/rook_b.png";
                }
                if (gameBoard[j][i].constructor.name === 'Queen')
                {
                    image = "icons/queen_b.png";
                }
                if (gameBoard[j][i].constructor.name === 'King')
                {
                    image = "icons/king_b.png";
                }
            }
            graphicBoard.push(<Tile number={i + j + 2} img={image}></Tile>)
        }
    }



    return (
        <div className='chess-board'>
            {graphicBoard}
        </div>
    )
}

export default board;