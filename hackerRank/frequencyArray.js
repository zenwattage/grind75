/**
 * the function is expected to return a 2D array of integers
 * @param {} arr 
 */

// This function takes in an array of integers as input and returns an array with the smallest and largest sums that can be obtained by grouping the numbers in the input array.
function createFrequencyArray(arr) {
    // Create a new Map to hold the frequency counts for each value
    const frequencyMap = new Map();

    // Loop through the array and count the frequency of each value
    arr.forEach(value => {
        // If the frequencyMap already has the value, increment its count by 1
        if (frequencyMap.has(value)) {
            frequencyMap.set(value, frequencyMap.get(value) + 1);
        } else { // Otherwise, add the value to the map with a count of 1
            frequencyMap.set(value, 1);
        }
    });

    // Convert the Map to an array of arrays, where each sub-array contains a distinct value and its frequency
    const result = Array.from(frequencyMap, ([value, frequency]) => [value, frequency]);

    // Sort the array by frequency, and then by value if frequencies are equal
    result.sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1]; // sort by frequency in descending order
        } else {
            return a[0] - b[0]; // sort by value in ascending order if frequencies are equal
        }
    });

    return result;
}
