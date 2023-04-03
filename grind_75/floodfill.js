/* An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color.You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4 - directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4 - directionally to those pixels(also with the same color), and so on.Replace the color of all of the aforementioned pixels with color.
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    // Get the starting pixel color
    const startColor = image[sr][sc];

    // If the starting pixel color is the same as the new color, no need to fill
    if (startColor === color) {
        return image;
    }

    // Define a helper function to perform the flood fill recursively
    const fill = (i, j) => {
        // If the current pixel is within the image boundaries and has the starting color
        if (i >= 0 && i < image.length && j >= 0 && j < image[0].length && image[i][j] === startColor) {
            // Change the color of the current pixel
            image[i][j] = color;

            // Fill the neighboring pixels in all 4 directions
            fill(i - 1, j); // Up
            fill(i + 1, j); // Down
            fill(i, j - 1); // Left
            fill(i, j + 1); // Right
        }
    };

    // Start the flood fill from the initial pixel (sr, sc)
    fill(sr, sc);

    // Return the modified image
    return image;
};
