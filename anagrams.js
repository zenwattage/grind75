/* Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

    // create a map of the letters in p
    let map = {};
    for (let i = 0; i < p.length; i++) {
        if (map[p[i]]) {
            map[p[i]]++;
        } else {
            map[p[i]] = 1;
        }
    }

    // initialize variables for the result, start index, end index, and count of letters in p
    let result = [];
    let start = 0;
    let end = 0;
    let count = p.length;

    // loop through s
    while (end < s.length) {
        // if the current letter in s is in p, decrement the count of letters in p
        if (map[s[end]] >= 1) {
            count--;
        }
        // decrement the count of the current letter in the map
        map[s[end]]--;
        // move the end index forward
        end++;

        // if all the letters in p are found, add the start index to the result array
        if (count === 0) {
            result.push(start);
        }

        // if the window size is equal to the length of p, move the start index forward and update the counts in the map and the count variable
        if (end - start === p.length) {
            if (map[s[start]] >= 0) {
                count++;
            }
            map[s[start]]++;
            start++;
        }
    }
    // return the result array
    return result;
};

findAnagrams("cbaebabacd", "abc");
