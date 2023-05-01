//visitor pattern
// Define a new operation to a collection of objects without changing the objects themselves
//explore an object without changing it

// Define the Visitor interface, which provides methods for visiting different elements
class Visitor {
    visitElementA(elementA) { }
    visitElementB(elementB) { }
}

// Define Element classes, which represent objects that can be visited by a Visitor
class Element {
    accept(visitor) { }
}

class ConcreteElementA extends Element {
    accept(visitor) {
        visitor.visitElementA(this);
    }

    operationA() {
        console.log("ConcreteElementA operationA");
    }
}

class ConcreteElementB extends Element {
    accept(visitor) {
        visitor.visitElementB(this);
    }

    operationB() {
        console.log("ConcreteElementB operationB");
    }
}

// Use the Visitor to perform operations on the Elements
class ConcreteVisitor extends Visitor {
    visitElementA(elementA) {
        elementA.operationA();
    }

    visitElementB(elementB) {
        elementB.operationB();
    }
}

// Use the Elements and Visitor to perform operations on the Elements
const elementA = new ConcreteElementA();
const elementB = new ConcreteElementB();

const visitor = new ConcreteVisitor();

elementA.accept(visitor); // Output: ConcreteElementA operationA
elementB.accept(visitor); // Output: ConcreteElementB operationB
