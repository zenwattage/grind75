/* You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit, return 0. */

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    // Initialize maxProfit variable to 0
    let maxProfit = 0;
    // Initialize minPrice variable to the first price in the array
    let minPrice = prices[0];
    // Loop through each price in the array
    for (let i = 0; i < prices.length; i++) {
        // If the current price is lower than the current minPrice
        if (prices[i] < minPrice) {
            // Set the current price to be the new minPrice
            minPrice = prices[i];
        }
        // If the difference between the current price and the minPrice is greater than the current maxProfit
        else if (prices[i] - minPrice > maxProfit) {
            // Set the new maxProfit to be the difference between the current price and the minPrice
            maxProfit = prices[i] - minPrice;
        }
    }
    // Return the final maxProfit value
    return maxProfit;
}
