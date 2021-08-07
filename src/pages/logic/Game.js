import {Bishop} from "./Bishop";
import {GameBoard} from "./GameBoard";
import {King} from "./King";
import {Knight} from "./Knight";
import {Pair} from "./Pair";
import {PlayerSpecifier} from "./PlayerSpecifier";

/**
 * Main object for game
 */
    export class Game {

    /**
     * Constructor for the game object, initiating new board with the correct pieces
     */
    constructor()
    {
        this.gameBoard = new GameBoard();
    }

    /**
     * The method will check if the first player is having only a knight and a king and return true, otherwise
     * return false
     * @return boolean value of the condition
     */
    knightPlusKingInFirst = () =>
    {
        let firstPlayerPieces = this.gameBoard.getPlayerPieces(PlayerSpecifier.FIRST);
        if (firstPlayerPieces.length === 2)
        {
            let countOfKnights = 0;
            let countOfKing = 0;
            for (let i = 0; i < firstPlayerPieces.length; i++)
            {
                let curPiece = firstPlayerPieces[i];
                if (curPiece.constructor.name === Knight.class)
                {
                    countOfKnights = countOfKnights + 1;
                }
                if (curPiece.constructor.name === King.class)
                {
                    countOfKing = countOfKnights + 1;
                }
            }
            return countOfKnights === 1 && countOfKing === 1;
        }
        return false;
    }

    /**
     * The method will check if the second player is having only a knight and a king and return true, otherwise
     * return false
     * @return boolean value of the condition
     */
    knightPlusKingInSecond()
    {
        let secondPlayerPieces = this.gameBoard.getPlayerPieces(PlayerSpecifier.SECOND);
        if (secondPlayerPieces.length === 2)
        {
            let countOfKnights = 0;
            let countOfKing = 0;
            for (let i = 0; i < secondPlayerPieces.length; i++)
            {
                let curPiece = secondPlayerPieces[i];
                if (curPiece.constructor.name === Knight.class)
                {
                    countOfKnights = countOfKnights + 1;
                }
                if (curPiece.constructor.name === King.class)
                {
                    countOfKing = countOfKing + 1;
                }
            }
            return countOfKnights === 1 && countOfKing === 1;
        }
        return false;
    }

    /**
     * The method will check if the first player is having only a bishop and a king and return true, otherwise
     * return false
     * @return boolean value of the condition
     */
    bishopPlusKingInFirst()
    {
        let firstPlayerPieces = this.gameBoard.getPlayerPieces(PlayerSpecifier.FIRST);
        if (firstPlayerPieces.length === 2)
        {
            let countOfBishops = 0;
            let countOfKing = 0;
            for(let i=0; i<firstPlayerPieces.length; i++)
            {
                let curPiece = firstPlayerPieces[i];
                if (curPiece.constructor.name === Bishop.class)
                {
                    countOfBishops = countOfBishops + 1;
                }
                if (curPiece.constructor.name === King.class)
                {
                    countOfKing = countOfKing + 1;
                }
            }
            return countOfBishops === 1 && countOfKing === 1;
        }
        return false;
    }

    /**
     * The method will check if the second player is having only a bishop and a king and return true, otherwise
     * return false
     * @return boolean value of the condition
     */
    bishopPlusKingInSecond()
    {
        let secondPlayerPieces = this.gameBoard.getPlayerPieces(PlayerSpecifier.SECOND);
        if (secondPlayerPieces.length === 2)
        {
            let countOfBishops = 0;
            let countOfKing = 0;
            for(let i=0; i<secondPlayerPieces.length; i++)
            {
                let curPiece = secondPlayerPieces[i];
                if (curPiece.constructor.name === Bishop.class)
                {
                    countOfBishops = countOfBishops + 1;
                }
                if (curPiece.constructor.name === King.class)
                {
                    countOfKing = countOfKing + 1;
                }
            }
            return countOfBishops === 1 && countOfKing === 1;
        }
        return false;
    }

    /**
     * The method will check if the first player is having only a king and return true, otherwise
     * return false
     * @return boolean value of the condition
     */
    onlyKingInFirst()
    {
        let firstPlayerPieces = this.gameBoard.getPlayerPieces(PlayerSpecifier.FIRST);
        if (firstPlayerPieces.length === 1)
        {
            let countOfKing = 0;
            for(let i=0; i < firstPlayerPieces.length; i++)
            {
                let curPiece = firstPlayerPieces[i];
                if (curPiece.constructor.name === King.class)
                {
                    countOfKing = countOfKing + 1;
                }
            }
            return countOfKing === 1;
        }
        return false;
    }

    /**
     * The method will check if the second player is having only a king and return true, otherwise
     * return false
     * @return boolean value of the condition
     */
    onlyKingInSecond()
    {
        let secondPlayerPieces = this.gameBoard.getPlayerPieces(PlayerSpecifier.SECOND);
        if (secondPlayerPieces.length === 1)
        {
            let countOfKing = 0;
            for(let i =0; i<secondPlayerPieces.length; i++)
            {
                let curPiece=secondPlayerPieces[i];
                if (curPiece.constructor.name === King.class)
                {
                    countOfKing = countOfKing + 1;
                }
            }
            return countOfKing === 1;
        }
        return false;
    }

    /**
     * Main gameplay function
     */
    gameRun()
    {
        let nowPlayingPlayerNumber = PlayerSpecifier.FIRST;
        let isGameOver = false;
        while (!isGameOver)
        {
            this.gameBoard.printBoardWithObjects();
            console.log("The " + nowPlayingPlayerNumber + " Player is Playing");
            let currentPiecesArrayList = this.gameBoard.getPlayerPieces(nowPlayingPlayerNumber);
            let possibleMovesInCheck = 0;
            if (this.gameBoard.isCheck(nowPlayingPlayerNumber))
            {
                console.log("Check");
                for(let i=0; i<currentPiecesArrayList.length; i++)
                {
                    let playingPiece = currentPiecesArrayList[i];
                    let curPiecePossibleMoves = playingPiece.possiblePieceMoves(this.gameBoard);
                    let pieceLastLocation = playingPiece.getCurrentLocation();
                    for(let j=0; j < curPiecePossibleMoves.length; j++)
                    {
                        let curPossibleMove = curPiecePossibleMoves[i];
                        let newLocationPiece = playingPiece.tempMovePiece(curPossibleMove, this.gameBoard, nowPlayingPlayerNumber);
                        if (this.gameBoard.isCheck(nowPlayingPlayerNumber))
                        {
                            playingPiece.tempMovePiece(pieceLastLocation, this.gameBoard, nowPlayingPlayerNumber);
                        }
                        else
                        {
                            possibleMovesInCheck = possibleMovesInCheck + 1;
                            playingPiece.tempMovePiece(pieceLastLocation, this.gameBoard, nowPlayingPlayerNumber);
                        }
                        if (newLocationPiece !== null)
                        {
                            if (nowPlayingPlayerNumber === PlayerSpecifier.FIRST)
                            {
                                newLocationPiece.tempMovePiece(curPossibleMove, this.gameBoard, PlayerSpecifier.SECOND);
                            }
                            else
                            {
                                newLocationPiece.tempMovePiece(curPossibleMove, this.gameBoard, PlayerSpecifier.FIRST);
                            }
                        }
                    }
                }
                if (possibleMovesInCheck === 0)
                {
                    console.log("Its CheckMate!");
                    break;
                }
            }
            let isTherePossibleMove = false;
            for(let i=0; i< currentPiecesArrayList.length; i++)
            {
                let curPiece = currentPiecesArrayList[i];
                let amountOfPossibleMoves = curPiece.possiblePieceMoves(this.gameBoard).length;
                if (amountOfPossibleMoves !== 0)
                {
                    isTherePossibleMove = true;
                }
            }

            if (!isTherePossibleMove)
            {
                console.log("Its a Draw!");
                break;
            }
            let onlyBishopAndKingInFirst = this.bishopPlusKingInFirst();
            let onlyBishopAndKingInSecond = this.bishopPlusKingInSecond();
            let onlyKnightAndKingInFirst = this.knightPlusKingInFirst();
            let onlyKnightAndKingInSecond = this.knightPlusKingInSecond();
            let onlyKingExistInFirst = this.onlyKingInFirst();
            let onlyKingExistInSecond = this.onlyKingInSecond();

            if ((onlyBishopAndKingInFirst || onlyKnightAndKingInFirst || onlyKingExistInFirst) &&
            (onlyBishopAndKingInSecond || onlyKnightAndKingInSecond || onlyKingExistInSecond))
            {
                console.log("Its a Draw!");
                break;
            }

            let validChoose = false;
            let chosenPiece = null;
            while (!validChoose)
            {
                console.log("Select X Location Of Your Piece");
                let pieceXLocation = parseInt(window.prompt("Select X Location Of Your Piece"));
                let pieceYLocation = parseInt(window.prompt("Select Y Location Of Your Piece"));
                chosenPiece = this.gameBoard.getPieceFromLocation(new Pair(pieceXLocation, pieceYLocation));
                if (currentPiecesArrayList.includes(chosenPiece))
                {
                    validChoose = true;
                }
                else
                {
                    console.log("You Chose Invalid Location, Please Choose Again");
                }
            }
            let lastLocation = chosenPiece.getCurrentLocation();
            let pieceXMoveLocation = parseInt(window.prompt("Select X Location To Move"));
            let pieceYMoveLocation = parseInt(window.prompt("Select Y Location To Move"));
            let isPieceMoved = chosenPiece.movePiece(new Pair(pieceXMoveLocation, pieceYMoveLocation),
                    this.gameBoard, nowPlayingPlayerNumber);
            let isStillCheck = false;
            if (this.gameBoard.isCheck(nowPlayingPlayerNumber))
            {
                isStillCheck = true;
                console.log("Move is not possible due to ongoing Check!");
                chosenPiece.tempMovePiece(lastLocation, this.gameBoard, nowPlayingPlayerNumber);
            }
            if (nowPlayingPlayerNumber === PlayerSpecifier.FIRST && isPieceMoved && !isStillCheck)
            {
                nowPlayingPlayerNumber = PlayerSpecifier.SECOND;
            }
            else if (nowPlayingPlayerNumber === PlayerSpecifier.SECOND && isPieceMoved && !isStillCheck)
            {
                nowPlayingPlayerNumber = PlayerSpecifier.FIRST;
            }
        }
    }
}
