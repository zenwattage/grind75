/*  You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount.If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin. */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 
 **/
function coinChange(coins, amount) {
    //declare new empty array 1 larger than amount
    let tempArray = new Array(amount + 1).fill(amount + 1);
    //set first index to 0
    tempArray[0] = 0;
    //iterate through tempArray
    for (let i = 1; i < tempArray.length; i++) {
        //iterate through coins array
        for (let j = 0; j < coins.length; j++) {
            // check if coin value is <= than current index
            if (coins[j] <= i) {
                //update value at index i of tempArray to minimum value between current value and tempArray
                tempArray[i] = Math.min(tempArray[i], tempArray[i - coins[j]] + 1);
            }

        }
    }

    // if the value at index amount of tempArray is greater than amount return -1, else return value at index amount
    return tempArray[amount] > amount ? -1 : tempArray[amount];
}

console.log(coinChange([1, 2, 5], 11)); //expect 3