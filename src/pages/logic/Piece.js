/**
 * abstract class for the general piece object
 */
    export class Piece {
    /**
     * override method that implements the movement mechanics the pieces (but pawn)
     * @param newLocation location to move
     * @param gameBoard board object which includes the game board set up
     * @param playerNumber enum which is the player's side
     * @return true if the piece moved successfully, false otherwise
     */
    movePiece(newLocation,gameBoard,playerNumber)
    {
        let isPieceMoved = false;
        let allPossibleMoves = this.possiblePieceMoves(gameBoard);
        for (let i = 0; i < allPossibleMoves.length; i++)
        {
            if (allPossibleMoves.get(i).isIdenticalPair(newLocation))
            {
                let pieceAtLocation = gameBoard.getPieceFromLocation(newLocation);
                if (pieceAtLocation != null)
                {
                    gameBoard.removeFromPieceList(pieceAtLocation, playerNumber);
                }
                gameBoard.putNull(this.currentLocation);
                gameBoard.putPiece(newLocation, this, playerNumber);
                isPieceMoved = true;
                this.currentLocation = newLocation;
                break;
            }
        }
        return isPieceMoved;
    }

    /**
     * The method will move a piece to a new location, saving the piece on the wanted spot.
     * @param newLocation location to move
     * @param gameBoard board object which includes the game board set up
     * @param playerNumber enum which is the player's side
     * @return the piece of the wanted spot or null if theres no piece
     */
    tempMovePiece(newLocation, gameBoard, playerNumber)
    {
        let newLocationPiece = gameBoard.getPieceFromLocation(newLocation);
        gameBoard.putNull(this.currentLocation);
        gameBoard.putPiece(newLocation, this, playerNumber);
        this.currentLocation = newLocation;

        return newLocationPiece;
    }

    /**
     * The method will return the location of the current piece object
     * @return location as Pair
     */
    getCurrentLocation()
    {
        return this.currentLocation;
    }

    /**
     * The method will return the owner of the current piece object
     * @return player recognizer
     */
    getPlayerNumber()
    {
        return this.playerNumber;
    }

}
