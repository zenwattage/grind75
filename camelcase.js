/**
 * capitalize every other letter in a string
 *  - if the string is empty, return an empty string
 * @param {string} input 
 * @returns {string}
 */

let camelCase = function (input) {
    let output = "";
    if (input === "") {
        return "";
    }
    //loop through an capitalize every even letter
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            output += input[i].toUpperCase();
        } else {
            output += input[i];
        }

    }
    return output;
}

console.log(camelCase("this is a string"));