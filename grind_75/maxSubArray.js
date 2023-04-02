/* Given an integer array nums, find the
subarray
with the largest sum, and return its sum. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    //create a max variable
    //create a currentMax variable
    //loop through the array
    //add the current value to the currentMax
    //if the currentMax is greater than the max set the max to the currentMax
    //if the currentMax is less than the max set the currentMax to the max
    //return the max
    console.log(nums);
    let max = nums[0];
    console.log("initial max: ", max);
    let currentMax = nums[0];
    console.log("initial currentMax: ", currentMax);
    for (let i = 1; i < nums.length; i++) {
        console.log("max: ", max)
        console.log("currentMax: ", max)
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        console.log("updated currentMax: ", currentMax);
        max = Math.max(max, currentMax);
        console.log("updated max: ", max);
    }
    return max;

};

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; //expect 6
console.log(maxSubArray(nums));
