
/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    //at each index add the value to the next index and check if it equals the target
    //if it does return the index of the first value and the index of the second value
    //if it doesn't move on to the next index
    //if you reach the end of the array and no values add up to the target return null
    let result = []; //init empty array
    for (let i = 0; i < nums.length; i++) { //loop through the array
        for (let j = i + 1; j < nums.length; j++) { //loop through the array one index ahead of the first loop
            if (nums[i] + nums[j] === target) { //if the two indexes add up to the target
                result.push(i, j); //push the two indexes into the result array
                return result; // return the result array
            }
        }
    }
    return null; //if not values are found that equal the target return null


}

console.log(twoSum([2, 7, 11, 15], 9));

;

/**
 * Success
Details
Runtime: 146 ms, faster than 45.94% of JavaScript online submissions for Two Sum.
Memory Usage: 42.4 MB, less than 64.98% of JavaScript online submissions for Two Sum.
 */