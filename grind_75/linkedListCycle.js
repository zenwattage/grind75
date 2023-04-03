// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list.Otherwise, return false.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // If the head is null, return false
    if (head === null) {
        return false;
    }

    // Create two pointers, slow and fast
    let slow = head;
    let fast = head.next;

    // While the slow and fast pointers are not equal
    while (slow !== fast) {
        // If the fast pointer is null or the next node of fast is null, return false
        if (fast === null || fast.next === null) {
            return false;
        }

        // Move slow pointer one step and fast pointer two steps
        slow = slow.next;
        fast = fast.next.next;
    }

    // If the slow and fast pointers are equal, return true
    return true;

};