import {Bishop} from "./Bishop";
import {Knight} from "./Knight";
import {Pair} from "./Pair";
import {Piece} from "./Piece";
import {PieceType} from "./PieceType";
import {PlayerSpecifier} from "./PlayerSpecifier";
import {Queen} from "./Queen";
import {Rook} from "./Rook";

/**
 * sub-class for the pawn piece
 */
export class Pawn extends Piece{

    /**
     * constructor for the pawn object based on the location of the piece and the player's number
     * @param locationToInsert tuple of x and y spots
     * @param givenPlayerNumber enum which is the player's side
     */
    constructor(locationToInsert, givenPlayerNumber)
    {
        super();
        this.typeOfPiece = PieceType.PAWN;
        this.currentLocation = locationToInsert;
        this.playerNumber = givenPlayerNumber;
    }

    /**
     * override method which calculates the possible moves of the pawn piece according to the current
     * state of the game
     * @param gameBoard board object which includes the game board set up
     * @return array list of all the possible moves
     */
    possiblePieceMoves(gameBoard)
    {
        let listOfAllPossibleMoves = [];
        let leftCoordinate = this.currentLocation.getLeft();
        let rightCoordinate = this.currentLocation.getRight();

        if (this.playerNumber === PlayerSpecifier.FIRST)
        {
            if (leftCoordinate === 6)
            {
                let locationCheck = gameBoard.getPieceFromLocation(new Pair(leftCoordinate - 2, rightCoordinate));
                if (locationCheck === null)
                {
                    listOfAllPossibleMoves.push(new Pair(leftCoordinate - 2, rightCoordinate));
                }
            }
            if ((leftCoordinate - 1 >= 0) && (rightCoordinate + 1 <= 7))
            {
                let locationCheck = gameBoard.getPieceFromLocation(new Pair(leftCoordinate - 1, rightCoordinate + 1));
                if (locationCheck !== null)
                {
                    if (locationCheck.getPlayerNumber() !== this.getPlayerNumber())
                    {
                        listOfAllPossibleMoves.push(new Pair(leftCoordinate - 1, rightCoordinate + 1));
                    }
                }
            }
            if ((leftCoordinate - 1 >= 0) && (rightCoordinate - 1 >= 0))
            {
                let locationCheck = gameBoard.getPieceFromLocation(new Pair(leftCoordinate - 1, rightCoordinate - 1));
                if (locationCheck !== null)
                {
                    if (locationCheck.getPlayerNumber() !== this.getPlayerNumber())
                    {
                        listOfAllPossibleMoves.push(new Pair(leftCoordinate - 1, rightCoordinate - 1));
                    }
                }
            }
            if (leftCoordinate - 1 >= 0)
            {
                let locationCheck = gameBoard.getPieceFromLocation(new Pair(leftCoordinate - 1, rightCoordinate));
                if (locationCheck === null)
                {
                    listOfAllPossibleMoves.push(new Pair(leftCoordinate - 1, rightCoordinate));
                }
            }
        }
        else
        {
            if (leftCoordinate === 1)
            {
                let locationCheck = gameBoard.getPieceFromLocation(new Pair(leftCoordinate + 2, rightCoordinate));
                if (locationCheck === null)
                {
                    listOfAllPossibleMoves.push(new Pair(leftCoordinate + 2, rightCoordinate));
                }
            }

            if ((leftCoordinate + 1 >= 0) && (rightCoordinate + 1 <= 7))
            {
                let locationCheck = gameBoard.getPieceFromLocation(new Pair(leftCoordinate + 1, rightCoordinate + 1));
                if (locationCheck !== null)
                {
                    if (locationCheck.getPlayerNumber() !== this.getPlayerNumber())
                    {
                        listOfAllPossibleMoves.push(new Pair(leftCoordinate + 1, rightCoordinate + 1));
                    }
                }
            }
            if ((leftCoordinate + 1 <= 7) && (rightCoordinate - 1 >= 0))
            {
                let locationCheck = gameBoard.getPieceFromLocation(new Pair(leftCoordinate + 1, rightCoordinate - 1));
                if (locationCheck !== null)
                {
                    if (locationCheck.getPlayerNumber() !== this.getPlayerNumber())
                    {
                        listOfAllPossibleMoves.push(new Pair(leftCoordinate + 1, rightCoordinate + 1));
                    }
                }
            }
            if (leftCoordinate + 1 >= 0)
            {
                let locationCheck = gameBoard.getPieceFromLocation(new Pair(leftCoordinate + 1, rightCoordinate));
                if (locationCheck === null)
                {
                    listOfAllPossibleMoves.push(new Pair(leftCoordinate + 1, rightCoordinate));
                }
            }
        }
        return listOfAllPossibleMoves;
    }

    /**
     * override method that implements the movement mechanics of the pawn piece
     * @param newLocation location to move
     * @param gameBoard board object which includes the game board set up
     * @param playerNumber enum which is the player's side
     * @return true if the piece moved successfully, false otherwise
     */
    movePiece(newLocation, gameBoard, playerNumber)
    {
        let isPieceMoved = false;
        let allPossibleMoves = this.possiblePieceMoves(gameBoard);
        for(let i = 0; i < allPossibleMoves.length; i++)
        {
            let allPossibleMove = allPossibleMoves[i];
            if (allPossibleMove.isIdenticalPair(newLocation)) {
                let pieceAtLocation = gameBoard.getPieceFromLocation(newLocation);
                if (pieceAtLocation !== null) {
                    gameBoard.removeFromPieceList(pieceAtLocation, playerNumber);
                }
                gameBoard.putNull(this.currentLocation);
                gameBoard.putPiece(newLocation, this, playerNumber);
                isPieceMoved = true;
                this.currentLocation = newLocation;
                break;
            }
        }
        let pawnLocation = this.currentLocation;
        if (this.currentLocation.getLeft() === 0 || this.currentLocation.getLeft() === 7)
        {
            let newPiece = 'O';
            while (newPiece === 'O')
            {
                newPiece = window.prompt("Choose new Piece: R-Rook, K-Knight, B-Bishop, Q-Queen")
            }
            if (newPiece === 'R')
            {
                gameBoard.removeOldPiece(pawnLocation, this, playerNumber);
                gameBoard.addNewPiece(pawnLocation, new Rook(pawnLocation, playerNumber), playerNumber);
            }
            if (newPiece === 'K')
            {
                gameBoard.removeOldPiece(pawnLocation, this, playerNumber);
                gameBoard.addNewPiece(pawnLocation, new Knight(pawnLocation, playerNumber), playerNumber);
            }
            if (newPiece === 'B')
            {
                gameBoard.removeOldPiece(pawnLocation, this, playerNumber);
                gameBoard.addNewPiece(pawnLocation, new Bishop(pawnLocation, playerNumber), playerNumber);
            }
            if (newPiece === 'Q')
            {
                gameBoard.removeOldPiece(pawnLocation, this, playerNumber);
                gameBoard.addNewPiece(pawnLocation, new Queen(pawnLocation, playerNumber), playerNumber);
            }
        }
        return isPieceMoved;
    }
}
