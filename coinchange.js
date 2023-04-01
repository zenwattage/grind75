/* You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount.If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin. */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Declare a function called `coinChange` that takes two arguments: `coins` and `amount`.
var coinChange = function (coins, amount) {
    // Create an array `dp` of length `amount + 1`, and fill it with the value `amount + 1`.
    let tempArray = new Array(amount + 1).fill(amount + 1);
    console.log("tempArray array: ", tempArray);
    // Set the first element of the `tempArray` array to 0.
    tempArray[0] = 0;

    // Iterate through the `tempArray` array starting from index 1.
    for (let i = 1; i < tempArray.length; i++) {
        // Iterate through the `coins` array.
        for (let j = 0; j < coins.length; j++) {
            // Check if the current coin value is less than or equal to the current index `i`.
            if (coins[j] <= i) {
                // Update the value at index `i` of the `tempArray` array to the minimum value between the current value and `tempArray[i - coins[j]] + 1`.
                tempArray[i] = Math.min(tempArray[i], tempArray[i - coins[j]] + 1);
            }
        }
    }
    // If the value at index `amount` of the `tempArray` array is greater than `amount`, return -1. Otherwise, return the value at index `amount`.
    return tempArray[amount] > amount ? -1 : tempArray[amount];
};

console.log(coinChange([1, 2, 5], 11));
