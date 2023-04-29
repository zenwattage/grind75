//find the longest sub-list which has the segment sizes in non-increasing order

function findLongestList(head) {
    // Initialize variables for the current and longest sub-lists
    let current = null;
    let longest = null;

    // Loop through the list
    let node = head;
    while (node != null) {
        // Check if the current node is part of the current sub-list
        if (current == null || node.val <= current.val) {
            // Add the current node to the current sub-list
            const temp = current;
            current = { val: node.val, next: temp };
        } else {
            // The current node is not part of the current sub-list, so update the longest sub-list if necessary
            if (longest == null || currentLength(current) > currentLength(longest)) {
                longest = current;
            }

            // Start a new sub-list with the current node as its only element
            current = { val: node.val, next: null };
        }

        // Move on to the next node
        node = node.next;
    }

    // Check if the current sub-list is longer than the longest sub-list
    if (longest == null || currentLength(current) > currentLength(longest)) {
        longest = current;
    }

    // Convert the longest sub-list to an array and return it
    return listToArray(longest);
}

// Helper function to calculate the length of a linked list
function currentLength(head) {
    let count = 0;
    let node = head;
    while (node != null) {
        count++;
        node = node.next;
    }
    return count;
}

// Helper function to convert a linked list to an array
function listToArray(head) {
    const result = [];
    let node = head;
    while (node != null) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}

}