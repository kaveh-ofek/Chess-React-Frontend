/**
 * simple pair class used to save (x,y) coordinates as a location
 */
export class Pair {
    /**
     * constructor for new pair
     * @param leftArgument x coordinate
     * @param rightArgument y coordinate
     */
    constructor(leftArgument, rightArgument)
    {
        this.arrayForPair = [leftArgument, rightArgument];
    }

    /**
     * The method will return the x coordinate of the pair
     * @return integer
     */
    getLeft()
    {
        return this.arrayForPair[0];
    }

    /**
     * The method will return the y coordinate of the pair
     * @return integer
     */
    getRight()
    {
        return this.arrayForPair[1];
    }

    /**
     * The method will return whether 2 pairs are having identical values
     * @param otherPair another pair to check with
     * @return boolean value
     */
    isIdenticalPair(otherPair)
    {
        return (this.arrayForPair[0] === otherPair.getLeft()) && (this.arrayForPair[1] === otherPair.getRight());
    }

}
