//implement a queue using two stacks with javascript
//stacks are LIFO
//queues are FIFO
class Queue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    //add an item to the back of the queue
    enQ(value) {
        this.inStack.push(value);
    }

    //remove an element from the front of the queue and return it
    deQ() {
        if (this.outStack.length === 0 && this.inStack.length === 0) {
            return undefined;
        }

        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }

        }

        return this.outStack.pop();
    }

    // return the front element of the queue without removing it
    peek() {
        // if the stacks are empty, return undefined
        if (this.outStack.length === 0 && this.outStack.length === 0) {
            return undefined;
        }

        // if outStack is empty, 
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }

    }
}