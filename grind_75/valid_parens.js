/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    //create a stack
    //loop through the string
    //if the character is an open bracket push it into the stack
    //if the character is a close bracket pop the last value from the stack and check if it is the corresponding open bracket
    //if it is continue
    //if it is not return false
    //if the stack is empty return true
    //if the stack is not empty return false
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else if (s[i] === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        } else if (s[i] === '}' && stack[stack.length - 1] === '{') {
            stack.pop();
        } else if (s[i] === ']' && stack[stack.length - 1] === '[') {
            stack.pop();
        } else {
            return false;
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }

};