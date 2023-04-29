// there are n = 6 developers, the pairs formed are(1, 6), (1, 5), and(4, 3), making experience points 3.5, 3, and 3.5.there are 2 distinct values, 3 and 3.5, so return 2 as the answer
// there are n developers working where the ith developer has experience points experience[i]

// example:
// experience = [1, 4, 1, 3, 5, 6]

// there are n = 6 developers.the pairs formed are(1, 6), (1, 5), (4, 3) making their experience points 3.5, 3, and 3.5 respectively.There are 2 distinct values, 3 and 3.5, so return 2 as the answer. 

function findUniqueValues(arr) {
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

console.log(findUniqueValues([1, 4, 1, 3, 5, 6]));

/* 
function countDistinctExperience(experience) {
    const pairs = [];

    // Form pairs of developers
    for (let i = 0; i < experience.length; i++) {
        for (let j = i + 1; j < experience.length; j++) {
            pairs.push([experience[i], experience[j]]);
        }
    }

    // Calculate the experience points for each pair
    const experiencePoints = pairs.map(pair => (pair[0] + pair[1]) / 2);

    // Get the distinct values of experience points and count them
    const distinctExperience = [...new Set(experiencePoints)];
    return distinctExperience.length;
}
 */