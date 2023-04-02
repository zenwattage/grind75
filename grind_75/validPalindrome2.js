/* Given a string s, return true if the s can be palindrome after deleting at most one character from it.



    Example 1:

Input: s = "aba"
Output: true
 */

function isAlmostPalindrome(s) {
    // Initialize left and right pointers to start and end of string
    let left = 0;
    let right = s.length - 1;

    // Loop through string until pointers meet
    while (left < right) {
        // If characters at pointers don't match
        if (s[left] !== s[right]) {
            // Try deleting one of the characters and check if resulting substrings are palindromes
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        // Move pointers inward
        left++;
        right--;
    }

    // If we make it through the loop without returning, the string is almost a palindrome
    return true;
}

function isPalindrome(s, left, right) {
    // Check if substring between left and right pointers is a palindrome
    while (left < right) {
        if (s[left] !== s[right]) {
            // If characters don't match, substring is not a palindrome
            return false;
        }
        // Move pointers inward
        left++;
        right--;
    }
    // If we make it through the loop without returning, the substring is a palindrome
    return true;
}

// Example usage
console.log(isAlmostPalindrome('abca')); // Output: true
console.log(isAlmostPalindrome('raceacar')); // Output: true
console.log(isAlmostPalindrome('hello')); // Output: false
