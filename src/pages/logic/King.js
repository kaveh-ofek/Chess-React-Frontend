import {Pair} from "./Pair";
import {Piece} from "./Piece";
import {PieceType} from "./PieceType";


/**
 * sub-class for the king piece
 */
export class King extends Piece{

    /**
     * constructor for the king object based on the location of the piece and the player's number
     * @param locationToInsert tuple of x and y spots
     * @param givenPlayerNumber enum which is the player's side
     */
    constructor(locationToInsert,givenPlayerNumber)
    {
        super();
        this.typeOfPiece = PieceType.KING;
        this.currentLocation = locationToInsert;
        this.playerNumber = givenPlayerNumber;
    }

    /**
     * override method which calculates the possible moves of the king piece according to the current
     * state of the game
     * @param gameBoard board object which includes the game board set up
     * @return array list of all the possible moves
     */
    possiblePieceMoves(gameBoard)
    {
        let listOfAllPossibleMoves = [];
        let leftCoordinate = this.currentLocation.getLeft();
        let rightCoordinate = this.currentLocation.getRight();
        let possibleLeftRightMoves = [];
        possibleLeftRightMoves.push(rightCoordinate);
        let possibleUpDownMoves = [];
        possibleUpDownMoves.push(leftCoordinate);
        if (leftCoordinate -1 >= 0)
        {
            possibleUpDownMoves.push(leftCoordinate - 1);
        }
        if (leftCoordinate + 1 <= 7)
        {
            possibleUpDownMoves.push(leftCoordinate + 1);
        }
        if (rightCoordinate -1 >= 0)
        {
            possibleLeftRightMoves.push(rightCoordinate - 1);
        }
        if (rightCoordinate + 1 <= 7)
        {
            possibleLeftRightMoves.push(rightCoordinate + 1);
        }

        for(let i = 0; i < possibleLeftRightMoves.length; i++)
        {
            let leftRightMove = possibleLeftRightMoves[i];
            for(let j = 0; j < possibleUpDownMoves.length; j++)
            {
                let upDownMove = possibleUpDownMoves[j];
                let locationCheck = gameBoard.getPieceFromLocation(new Pair(upDownMove, leftRightMove));
                if (locationCheck === null)
                {
                    listOfAllPossibleMoves.push(new Pair(upDownMove, leftRightMove));
                }
                else
                {
                    if (this.playerNumber !== locationCheck.getPlayerNumber())
                    {
                        listOfAllPossibleMoves.push(new Pair(upDownMove, leftRightMove));
                    }
                }
            }
        }
        return listOfAllPossibleMoves;
    }

}
