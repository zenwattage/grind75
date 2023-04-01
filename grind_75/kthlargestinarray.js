/* Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

You must solve it in O(n) time complexity. */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    // Define a variable to store the kth largest element
    let kthLargest;

    // Sort the array of numbers in ascending order using a compare function
    nums.sort((a, b) => a - b);

    // Loop through the sorted array
    for (let i = 0; i < nums.length; i++) {
        // If the current index is equal to the (length of the array minus k)
        if (i === nums.length - k) {
            // Set the kthLargest variable to the element at this index
            kthLargest = nums[i];
        }
    }

    // Return the kth largest element
    return kthLargest;

}

nums = [3, 2, 1, 5, 6, 4];
k = 2;

console.log(findKthLargest(nums, k));
findKthLargest(nums, k);