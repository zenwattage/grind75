/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times.You may assume that the majority element always exists in the array. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // Create an object to store the count of each number in the input array
    let memo = {};

    // Calculate the majority length, which is half of the length of the input array
    let majority = nums.length / 2;

    // Iterate through the input array
    for (let i = 0; i < nums.length; i++) {
        console.log(memo);
        // If the current number has already been seen, increment its count in the memo object
        if (memo[nums[i]]) {
            memo[nums[i]]++;
        }
        // If the current number has not been seen, set its count in the memo object to 1
        else {
            memo[nums[i]] = 1;
        }

        // If the count of the current number is greater than the majority length, return the current number
        if (memo[nums[i]] > majority) {
            return nums[i];
        }
    }
};
console.log(majorityElement([3, 2, 3])); // 3
