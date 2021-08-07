import {Bishop} from "./Bishop";
import {King} from "./King";
import {Knight} from "./Knight";
import {Pair} from "./Pair";
import {Pawn} from "./Pawn";
import {PlayerSpecifier} from "./PlayerSpecifier";
import {Queen} from "./Queen";
import {Rook} from "./Rook";

/**
 * The board class will contain the current state of pieces in the board
 */
    export class GameBoard {
    /**
     * Simple constructor for a board initiated with pieces
     */
    static counter = 0;
    
    constructor()
    {
        this.gameBoard = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]];
        this.firstPlayerPieces = [];
        this.secondPlayerPieces = [];

        //first player init
        for(let i = 0; i < 8; i++)
        {
            let newPawn = new Pawn(new Pair(6, i), PlayerSpecifier.FIRST);
            this.gameBoard[6][i] = newPawn;
            this.firstPlayerPieces.push(newPawn);
        }

        let player1LeftRook = new Rook(new Pair(7, 0), PlayerSpecifier.FIRST);
        let player1RightRook = new Rook(new Pair(7, 7), PlayerSpecifier.FIRST);
        this.gameBoard[7][0] = player1LeftRook;
        this.gameBoard[7][7] = player1RightRook;
        this.firstPlayerPieces.push(player1LeftRook);
        this.firstPlayerPieces.push(player1RightRook);

        let player1LeftKnight = new Knight(new Pair(7, 1), PlayerSpecifier.FIRST);
        let player1RightKnight = new Knight(new Pair(7, 6), PlayerSpecifier.FIRST);
        this.gameBoard[7][1] = player1LeftKnight;
        this.gameBoard[7][6] = player1RightKnight;
        this.firstPlayerPieces.push(player1LeftKnight);
        this.firstPlayerPieces.push(player1RightKnight);

        let player1LeftBishop = new Bishop(new Pair(7, 2), PlayerSpecifier.FIRST);
        let player1RightBishop = new Bishop(new Pair(7, 5), PlayerSpecifier.FIRST);
        this.gameBoard[7][2] = player1LeftBishop;
        this.gameBoard[7][5] = player1RightBishop;
        this.firstPlayerPieces.push(player1LeftBishop);
        this.firstPlayerPieces.push(player1RightBishop);

        let player1King = new King(new Pair(7, 4), PlayerSpecifier.FIRST);
        this.gameBoard[7][4] = player1King;
        this.firstPlayerPieces.push(player1King);

        let player1Queen = new Queen(new Pair(7, 3), PlayerSpecifier.FIRST);
        this.gameBoard[7][3] = player1Queen;
        this.firstPlayerPieces.push(player1Queen);

        //second player init
        for(let i = 0; i < 8; i++)
        {
            let newPawn = new Pawn(new Pair(1, i), PlayerSpecifier.SECOND);
            this.gameBoard[1][i] = newPawn;
            this.secondPlayerPieces.push(newPawn);
        }

        let player2LeftRook = new Rook(new Pair(0, 0), PlayerSpecifier.SECOND);
        let player2RightRook = new Rook(new Pair(0, 7), PlayerSpecifier.SECOND);
        this.gameBoard[0][0] = player2LeftRook;
        this.gameBoard[0][7] = player2RightRook;
        this.secondPlayerPieces.push(player2LeftRook);
        this.secondPlayerPieces.push(player2RightRook);

        let player2LeftKnight = new Knight(new Pair(0, 1), PlayerSpecifier.SECOND);
        let player2RightKnight = new Knight(new Pair(0, 6), PlayerSpecifier.SECOND);
        this.gameBoard[0][1] = player2LeftKnight;
        this.gameBoard[0][6] = player2RightKnight;
        this.secondPlayerPieces.push(player2LeftKnight);
        this.secondPlayerPieces.push(player2RightKnight);

        let player2LeftBishop = new Bishop(new Pair(0, 2), PlayerSpecifier.SECOND);
        let player2RightBishop = new Bishop(new Pair(0, 5), PlayerSpecifier.SECOND);
        this.gameBoard[0][2] = player2LeftBishop;
        this.gameBoard[0][5] = player2RightBishop;
        this.secondPlayerPieces.push(player2LeftBishop);
        this.secondPlayerPieces.push(player2RightBishop);

        let player2King = new King(new Pair(0, 4), PlayerSpecifier.SECOND);
        this.gameBoard[0][4] = player2King;
        this.secondPlayerPieces.push(player2King);

        let player2Queen = new Queen(new Pair(0, 3), PlayerSpecifier.SECOND);
        this.gameBoard[0][3] = player2Queen;
        this.secondPlayerPieces.push(player2Queen);

        //firstPlayerOnlyPawnInit();
        //secondPlayerOnlyPawnInit();

    }

    /**
     * The method will initiate the starting position for the black pieces
     */
    secondPlayerPieceInit()
    {
        for(let i = 0; i < 8; i++)
        {
            let newPawn = new Pawn(new Pair(1, i), PlayerSpecifier.SECOND);
            this.gameBoard[1][i] = newPawn;
            this.secondPlayerPieces.push(newPawn);
        }

        let player2LeftRook = new Rook(new Pair(0, 0), PlayerSpecifier.SECOND);
        let player2RightRook = new Rook(new Pair(0, 7), PlayerSpecifier.SECOND);
        this.gameBoard[0][0] = player2LeftRook;
        this.gameBoard[0][7] = player2RightRook;
        this.secondPlayerPieces.push(player2LeftRook);
        this.secondPlayerPieces.push(player2RightRook);

        let player2LeftKnight = new Knight(new Pair(0, 1), PlayerSpecifier.SECOND);
        let player2RightKnight = new Knight(new Pair(0, 6), PlayerSpecifier.SECOND);
        this.gameBoard[0][1] = player2LeftKnight;
        this.gameBoard[0][6] = player2RightKnight;
        this.secondPlayerPieces.push(player2LeftKnight);
        this.secondPlayerPieces.push(player2RightKnight);

        let player2LeftBishop = new Bishop(new Pair(0, 2), PlayerSpecifier.SECOND);
        let player2RightBishop = new Bishop(new Pair(0, 5), PlayerSpecifier.SECOND);
        this.gameBoard[0][2] = player2LeftBishop;
        this.gameBoard[0][5] = player2RightBishop;
        this.secondPlayerPieces.push(player2LeftBishop);
        this.secondPlayerPieces.push(player2RightBishop);

        let player2King = new King(new Pair(0, 4), PlayerSpecifier.SECOND);
        this.gameBoard[0][4] = player2King;
        this.secondPlayerPieces.push(player2King);

        let player2Queen = new Queen(new Pair(0, 3), PlayerSpecifier.SECOND);
        this.gameBoard[0][3] = player2Queen;
        this.secondPlayerPieces.push(player2Queen);
    }

    /**
     * The method will initiate the starting position for the white pieces
     */
    firstPlayerPieceInit()
    {
        for(let i = 0; i < 8; i++)
        {
            let newPawn = new Pawn(new Pair(6, i), PlayerSpecifier.FIRST);
            this.gameBoard[6][i] = newPawn;
            this.firstPlayerPieces.push(newPawn);
        }

        let player1LeftRook = new Rook(new Pair(7, 0), PlayerSpecifier.FIRST);
        let player1RightRook = new Rook(new Pair(7, 7), PlayerSpecifier.FIRST);
        this.gameBoard[7][0] = player1LeftRook;
        this.gameBoard[7][7] = player1RightRook;
        this.firstPlayerPieces.push(player1LeftRook);
        this.firstPlayerPieces.push(player1RightRook);

        let player1LeftKnight = new Knight(new Pair(7, 1), PlayerSpecifier.FIRST);
        let player1RightKnight = new Knight(new Pair(7, 6), PlayerSpecifier.FIRST);
        this.gameBoard[7][1] = player1LeftKnight;
        this.gameBoard[7][6] = player1RightKnight;
        this.firstPlayerPieces.push(player1LeftKnight);
        this.firstPlayerPieces.push(player1RightKnight);

        let player1LeftBishop = new Bishop(new Pair(7, 2), PlayerSpecifier.FIRST);
        let player1RightBishop = new Bishop(new Pair(7, 5), PlayerSpecifier.FIRST);
        this.gameBoard[7][2] = player1LeftBishop;
        this.gameBoard[7][5] = player1RightBishop;
        this.firstPlayerPieces.push(player1LeftBishop);
        this.firstPlayerPieces.push(player1RightBishop);

        let player1King = new King(new Pair(7, 4), PlayerSpecifier.FIRST);
        this.gameBoard[7][4] = player1King;
        this.firstPlayerPieces.push(player1King);

        let player1Queen = new Queen(new Pair(7, 3), PlayerSpecifier.FIRST);
        this.gameBoard[7][3] = player1Queen;
        this.firstPlayerPieces.push(player1Queen);
    }

    /**
     * The method will return the piece exist in the given location, if theres no piece the method will return
     * null
     * @param givenLocation location of the piece to look for
     * @return the located piece
     */
    getPieceFromLocation(givenLocation)
    {
        let leftCoordinate = givenLocation.getLeft();
        let rightCoordinate = givenLocation.getRight();
        if (this.gameBoard[leftCoordinate][rightCoordinate] != null)
        {
            return this.gameBoard[leftCoordinate][rightCoordinate];
        }
        else
            return null;
    }
    /**
     * used for debug - print the current state of the board
     */
    printBoardWithObjects()
    {
        for (let i = 0; i < 8; i++)
        {
            console.log("");
            for (let j = 0; j < 8; j++)
            {
                console.log(this.gameBoard[i][j] + " ");
            }
        }
        console.log("");
        console.log("");
    }

    /**
     * the method will put null in the given location
     * @param givenLocation x,y coordinates
     */
    putNull(givenLocation)
    {
        let leftCoordinate = givenLocation.getLeft();
        let rightCoordinate = givenLocation.getRight();
        this.gameBoard[leftCoordinate][rightCoordinate] = null;
    }

    /**
     * The method will put a given piece at a given location
     * @param givenLocation location to place
     * @param givenPiece piece
     * @param playerNumber enum which is the player's side
     */
    putPiece(givenLocation, givenPiece, playerNumber)
    {
        let leftCoordinate = givenLocation.getLeft();
        let rightCoordinate = givenLocation.getRight();
        this.gameBoard[leftCoordinate][rightCoordinate] = givenPiece;
    }

    /**
     * The method will remove a piece from the board
     * @param givenPiece piece to remove
     * @param playerNumber enum which is the player's side
     */
    removeFromPieceList(givenPiece, playerNumber)
    {
        if (playerNumber === PlayerSpecifier.FIRST)
        {
            this.secondPlayerPieces.remove(givenPiece);
        }
        else
        {
            this.firstPlayerPieces.remove(givenPiece);
        }
    }

    /**
     * The method will push a new piece to the board according to chosen player
     * @param givenLocation location to place
     * @param givenPiece piece
     * @param playerNumber enum which is the player's side
     */
    addNewPiece(givenLocation, givenPiece, playerNumber)
    {
        let leftCoordinate = givenLocation.getLeft();
        let rightCoordinate = givenLocation.getRight();
        this.gameBoard[leftCoordinate][rightCoordinate] = givenPiece;
        if (playerNumber === PlayerSpecifier.FIRST)
        {
            this.firstPlayerPieces.push(givenPiece);
        }
        else
        {
            this.secondPlayerPieces.push(givenPiece);
        }
    }

    /**
     * The method will remove a piece from the board according to chosen player
     * @param givenLocation location to remove
     * @param oldPiece piece
     * @param playerNumber enum which is the player's side
     */
    removeOldPiece(givenLocation, oldPiece, playerNumber)
    {
        let leftCoordinate = givenLocation.getLeft();
        let rightCoordinate = givenLocation.getRight();
        this.gameBoard[leftCoordinate][rightCoordinate] = null;
        if (playerNumber === PlayerSpecifier.FIRST)
        {
            this.firstPlayerPieces.remove(oldPiece);
        }
        else
        {
            this.secondPlayerPieces.remove(oldPiece);
        }
    }

    /**
     * The method will return the array list of pieces of given player
     * @param playerNumber enum which is the player's side
     * @return array list contains all the pieces of the player
     */
    getPlayerPieces(playerNumber)
    {
        if (playerNumber === PlayerSpecifier.FIRST)
        {
            return this.firstPlayerPieces;
        }
        else
        {
            return this.secondPlayerPieces;
        }
    }

    /**
     * The method will check if the given player is at "Check" state
     * @param nowPlayingPlayerNumber enum which is the player's side
     * @return boolean value
     */
    isCheck(nowPlayingPlayerNumber)
    {
        let kingLocation = null;
        let playerPiecesArray = this.getPlayerPieces(nowPlayingPlayerNumber);
        for (let i = 0; i < playerPiecesArray.length; i++)
        {
            let curPiece = playerPiecesArray[i];

            if (curPiece.constructor.name === 'King')
            {
                kingLocation = curPiece.getCurrentLocation();
                break;
            }
        }
        let enemyPiecesArray;
        if (nowPlayingPlayerNumber === PlayerSpecifier.FIRST)
        {
            enemyPiecesArray = this.secondPlayerPieces;
        }
        else
        {
            enemyPiecesArray = this.firstPlayerPieces;
        }
        for(let i = 0; i < enemyPiecesArray.length; i++)
        {
            let enemyPiece = enemyPiecesArray[i];
            let currentEnemyPiecePossibleMoves = enemyPiece.possiblePieceMoves(this);
            for (let j = 0; j < currentEnemyPiecePossibleMoves.length; j++)
            {
                let possibleMoveLocation = currentEnemyPiecePossibleMoves[j];
                if (possibleMoveLocation.isIdenticalPair(kingLocation))
                {
                    return true;
                }
            }
        }
        return false;
    }
}
