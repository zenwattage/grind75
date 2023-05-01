//singleton pattern
// only one instance of a class

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }

        return Singleton.instance;
    }

    sayHello() {
        console.log("Hello!");
    }
}

// Use the Singleton to create a single instance of the class
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // Output: true

instance1.sayHello(); // Output: Hello!
instance2.sayHello(); // Output: Hello!
