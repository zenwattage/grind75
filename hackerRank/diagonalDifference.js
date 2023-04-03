// This function takes in a square matrix as input and calculates the absolute difference between the sums of its diagonals.
function diagonalDifference(arr) {
    // Initialize variables to keep track of the sum of the elements on the left diagonal and the right diagonal.
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    // Get the length of the matrix.
    let n = arr.length;
    // Loop through the rows of the matrix.
    for (let i = 0; i < n; i++) {
        // Add the element on the left diagonal to the leftDiagonal variable.
        leftDiagonal += arr[i][i];
        // Add the element on the right diagonal to the rightDiagonal variable. We use n - i - 1 to get the index of the element on the right diagonal.
        rightDiagonal += arr[i][n - i - 1];
    }
    // Return the absolute difference between the sums of the left diagonal and right diagonal.
    return Math.abs(leftDiagonal - rightDiagonal);
}