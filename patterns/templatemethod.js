// template method pattern
//Template Method pattern allows us to define a template for a series of steps in an algorithm and allow subclasses to implement specific steps in the algorithm. This can be useful in situations where we have a general algorithm that needs to be customized in specific ways, such as in a user interface or game.

// Define the AbstractClass, which provides a template method and abstract methods that subclasses must implement
class AbstractClass {
    templateMethod() {
        this.operation1();
        this.operation2();
        this.operation3();
    }

    operation1() { }

    operation2() { }

    operation3() { }
}

// Define ConcreteClassA and ConcreteClassB, which extend the AbstractClass and implement the abstract methods
class ConcreteClassA extends AbstractClass {
    operation1() {
        console.log("ConcreteClassA operation1");
    }

    operation2() {
        console.log("ConcreteClassA operation2");
    }
}

class ConcreteClassB extends AbstractClass {
    operation1() {
        console.log("ConcreteClassB operation1");
    }

    operation3() {
        console.log("ConcreteClassB operation3");
    }
}

// Use the AbstractClass, ConcreteClassA, and ConcreteClassB to demonstrate the template method
const concreteClassA = new ConcreteClassA();
concreteClassA.templateMethod();
// Output:
// ConcreteClassA operation1
// ConcreteClassA operation2

const concreteClassB = new ConcreteClassB();
concreteClassB.templateMethod();
// Output:
// ConcreteClassB operation1
// ConcreteClassB operation3
