//itertor pattern
//access elements of an object sequentially

// Define an object that implements the iterator pattern
const myIterator = {
    data: [1, 2, 3, 4, 5],
    pointer: 0,
    next() {
        if (this.pointer < this.data.length) {
            const value = this.data[this.pointer];
            this.pointer++;
            return { done: false, value };
        } else {
            return { done: true };
        }
    }
};

// Use a for...of loop to iterate over the object's data
for (const value of myIterator) {
    console.log(value);
}
