var MyQueue = function () {
    // Initialize two stacks, one for input and one for output
    this.inputStack = [];
    this.outputStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    // Push the element to the input stack
    this.inputStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    // If the output stack is empty, transfer elements from the input stack
    if (this.outputStack.length === 0) {
        while (this.inputStack.length > 0) {
            this.outputStack.push(this.inputStack.pop());
        }
    }
    // Pop and return the top element from the output stack
    return this.outputStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    // If the output stack is empty, transfer elements from the input stack
    if (this.outputStack.length === 0) {
        while (this.inputStack.length > 0) {
            this.outputStack.push(this.inputStack.pop());
        }
    }
    // Return the top element from the output stack without removing it
    return this.outputStack[this.outputStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    // The queue is empty if both the input and output stacks are empty
    return this.inputStack.length === 0 && this.outputStack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
