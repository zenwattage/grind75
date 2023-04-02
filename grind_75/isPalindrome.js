/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non - alphanumeric characters, it reads the same forward and backward.Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. */


/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    // Convert to lowercase and remove non-alphanumeric characters
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Compare the cleaned string with its reverse
    return cleaned === cleaned.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome('A man, a plan, a canal: Panama')); // Output: true
console.log(isPalindrome('race a car')); // Output: false
