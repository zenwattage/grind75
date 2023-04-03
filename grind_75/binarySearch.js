/* Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.If target exists, then return its index.Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.



    Example 1:

Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Declare the binary search function with 'nums' as the input array and 'target' as the value to search for
var search = function (nums, target) {
    // Initialize the 'left' boundary of the search interval to the first index of the array
    let left = 0;
    // Initialize the 'right' boundary of the search interval to the last index of the array
    let right = nums.length - 1;
    // Calculate the initial midpoint of the search interval
    let mid = Math.floor((left + right) / 2);

    // Continue searching while the 'left' boundary is less than or equal to the 'right' boundary
    while (left <= right) {
        // If the midpoint value is equal to the target, the target has been found
        if (nums[mid] === target) {
            // Return the index of the target value
            return mid;
            // If the midpoint value is greater than the target, the target is in the left half of the interval
        } else if (nums[mid] > target) {
            // Update the 'right' boundary to be the index before the current midpoint
            right = mid - 1;
            // If the midpoint value is less than the target, the target is in the right half of the interval
        } else {
            // Update the 'left' boundary to be the index after the current midpoint
            left = mid + 1;
        }
        // Recalculate the midpoint based on the updated 'left' and 'right' boundaries
        mid = Math.floor((left + right) / 2);
    }
    // If the loop exits and the target has not been found, return -1 to indicate it's not in the array
    return -1;
};

