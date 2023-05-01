//bridge pattern
//link what it is to how it works

// Define the Abstraction interface, which provides high-level functionality to the client
class Abstraction {
    constructor(implementation) {
        this.implementation = implementation;
    }

    operation() {
        const implementationResult = this.implementation.operationImplementation();
        console.log(`Abstraction: Base operation with implementation result: ${implementationResult}`);
    }
}

// Define the Implementor interface, which provides low-level functionality that Abstraction can rely on
class Implementor {
    operationImplementation() { }
}

// Define Concrete Implementors, which provide specific implementations of the Implementor interface
class ConcreteImplementorA extends Implementor {
    operationImplementation() {
        return "ConcreteImplementorA: Operation";
    }
}

class ConcreteImplementorB extends Implementor {
    operationImplementation() {
        return "ConcreteImplementorB: Operation";
    }
}

// Use the Abstraction and Implementor together to provide different combinations of functionality
const implementationA = new ConcreteImplementorA();
const abstractionA = new Abstraction(implementationA);
abstractionA.operation();

const implementationB = new ConcreteImplementorB();
const abstractionB = new Abstraction(implementationB);
abstractionB.operation();



