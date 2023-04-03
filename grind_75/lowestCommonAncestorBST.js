/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // If the current node is null, return null
    if (root === null) {
        return null;
    }

    // If the current node is equal to either p or q, return the current node
    if (root === p || root === q) {
        return root;
    }

    // Recursively search the left and right subtrees for p and q
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    // If both left and right are not null, the current node is the LCA
    if (left !== null && right !== null) {
        return root;
    }

    // If both left and right are null, return null
    if (left === null && right === null) {
        return null;
    }

    // If only one of left or right is null, return the non-null node
    return left !== null ? left : right;

};

console.log(lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8)); // 6