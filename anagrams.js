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

    let result = [];
    let start = 0;
    let end = 0;
    let count = p.length;

    while (end < s.length) {
        if (map[s[end]] >= 1) {
            count--;
        }
        map[s[end]]--;
        end++;

        if (count === 0) {
            result.push(start);
        }

        if (end - start === p.length) {
            if (map[s[start]] >= 0) {
                count++;
            }
            map[s[start]]++;
            start++;
        }
    }
    return result;
};

findAnagrams("cbaebabacd", "abc");