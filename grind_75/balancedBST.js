/**
 * Given a binary tree, determine if it is height-balanced.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    // Helper function to calculate the height of a node
    const height = (node) => {
        if (node === null) {
            return 0;
        }
        return 1 + Math.max(height(node.left), height(node.right));
    };

    // Helper function to check if a node is balanced
    const isNodeBalanced = (node) => {
        if (node === null) {
            return true;
        }
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);

        // Check if the height difference between left and right subtree is not greater than 1
        // and if both left and right subtrees are also balanced
        return Math.abs(leftHeight - rightHeight) <= 1 && isNodeBalanced(node.left) && isNodeBalanced(node.right);
    };

    // Call the helper function to check if the root node is balanced
    return isNodeBalanced(root);
};

console.log(isBalanced([3, 9, 20, null, null, 15, 7])); // true