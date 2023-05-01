//cyclic sort pattern

//Cyclic Sort pattern allows us to sort an array in-place in O(n) time complexity. This can be useful in situations where we need to sort large arrays or where memory usage is a concern.
function cyclicSort(nums) {
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
    }
    return nums;
}

// Use the cyclicSort function to sort an array
const arr = [3, 1, 5, 4, 2];
console.log(cyclicSort(arr)); // Output: [1, 2, 3, 4, 5]
