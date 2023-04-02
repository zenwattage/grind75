/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list.The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// ListNode that represents a node in a singly linked list
// The function takes two parameters: 'val', which is the value of the node, and 'next', which is a reference to the next node in the list
/** * 
 * @param {*} val 
 * @param {*} next 
 */
function ListNode(val, next) {
    // Set the 'val' property of the ListNode object to the value provided as an argument, or 0 if 'val' is undefined
    this.val = (val === undefined ? 0 : val)

    // Set the 'next' property of the ListNode object to the reference provided as an argument, or null if 'next' is undefined
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // Create a new ListNode object as a placeholder for the merged linked list
    let mergedList = new ListNode();
    // Set 'current' to the ListNode object created above, which will be used to traverse the merged list
    let current = mergedList;
    // While both list1 and list2 still have nodes to process
    while (list1 && list2) {
        // If the value of the current node in list1 is smaller than the value of the current node in list2
        if (list1.val < list2.val) {
            // Set the 'next' pointer of the 'current' node to the current node of list1
            current.next = list1;
            // Move to the next node in list1
            list1 = list1.next;
        } else {
            // Set the 'next' pointer of the 'current' node to the current node of list2
            current.next = list2;
            // Move to the next node in list2
            list2 = list2.next;
        }
        // Move to the next node in the merged list
        current = current.next;
    }
    // After exiting the while loop, set the 'next' pointer of the 'current' node to the remaining nodes of list1 or list2 (whichever is not null)
    current.next = list1 || list2;

    // Return the merged linked list starting from the second node, as the first node is a placeholder
    return mergedList.next;
};
list1 = [1, 2, 4];
list2 = [1, 3, 4];
console.log(mergeTwoLists(list1, list2));