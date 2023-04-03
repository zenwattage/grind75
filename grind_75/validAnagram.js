/**
 * Checks if two strings are anagrams of each other.
 * @param {string} s - The first string.
 * @param {string} t - The second string.
 * @returns {boolean} - True if the strings are anagrams, false otherwise.
 */
var isAnagram = function (s, t) {
    // If the strings have different lengths, they cannot be anagrams
    if (s.length !== t.length) {
        return false;
    }

    // Initialize an empty map to store the counts of each letter in s
    const map = {};

    // Loop through s and increment the count of each letter in the map
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        map[letter] = (map[letter] || 0) + 1;
    }

    // Loop through t and decrement the count of each letter in the map
    for (let i = 0; i < t.length; i++) {
        const letter = t[i];
        // If the current letter is not in the map, or its count is already 0, the strings are not anagrams
        if (!map[letter] || map[letter] === 0) {
            return false;
        }
        map[letter]--;
    }

    // If all letters in s have been accounted for, the strings are anagrams
    return true;
};
