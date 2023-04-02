//implement a breadth first search
//create a queue
//add the root node to the queue
//while the queue is not empty
//remove the first node from the queue
//add the first node's children to the queue
//add the first node to the visited array
//return the visited array


function breadthFirstSearch(root) {
    let queue = [root];
    let visited = [];
    while (queue.length) {
        let node = queue.shift();
        queue.push(...node.children);
        visited.push(node);
    }
    return visited;
}


// create a set of data to test the breadth first search
// create a node class
// create a tree class
// create a breadth first search method

class Node {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
}

Tree.prototype.breadthFirstSearch = function () {
    let queue = [this.root];
    let visited = [];
    while (queue.length) {
        let node = queue.shift();
        queue.push(...node.children);
        visited.push(node);
    }
    return visited;
}

// create a new tree
// create a new node
// add the node to the tree
// add children to the node
// run the breadth first search method on the tree

let tree = new Tree();
let node = new Node(1);
tree.root = node;
node.children.push(new Node(2));
node.children.push(new Node(3));
node.children.push(new Node(4));
node.children[0].children.push(new Node(5));
node.children[0].children.push(new Node(6));
node.children[2].children.push(new Node(7));
node.children[2].children.push(new Node(8));
console.log(tree.breadthFirstSearch());

// [Node { val: 1, children: [ [Node], [Node], [Node] ] },
//  Node { val: 2, children: [ [Node], [Node] ] },
//  Node { val: 3, children: [] },
//  Node { val: 4, children: [ [Node], [Node] ] },
//  Node { val: 5, children: [] },
//  Node { val: 6, children: [] },
//  Node { val: 7, children: [] },
//  Node { val: 8, children: [] }]

