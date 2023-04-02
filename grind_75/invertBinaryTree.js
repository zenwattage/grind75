/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {

    // If root is null, return null
    if (!root) {
        return null;
    }

    // Initialize left and right pointers to root's left and right children
    let left = root.left;
    let right = root.right;

    // Set root's left child to be the result of calling invertTree on root's right child
    root.left = invertTree(right);
    // Set root's right child to be the result of calling invertTree on root's left child
    root.right = invertTree(left);

    // Return root
    return root;

};
// 80-90ms
// Example usage
root = [4, 2, 7, 1, 3, 6, 9];
console.log(invertTree(root)); // Output: [4, 7, 2, 9, 6, 3, 1]


/**
 * Recursive version: 
 * 85-105ms
 * 
 * var invertTree = function (root) {
  // Base case: if the root is null, return null
  if (root === null) {
    return null;
  }

  // Swap the left and right children of the root
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Recursively invert the left and right subtrees
  invertTree(root.left);
  invertTree(root.right);

  // Return the inverted tree
  return root;
};
 */