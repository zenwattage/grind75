//strategy pattern
//Strategy pattern allows us to encapsulate different algorithms and make them interchangeable at runtime. This can be useful in situations where we need to switch between different algorithms based on user input or other conditions, such as in a game or optimization algorithm.

// Define the Strategy interface, which provides a method for performing an algorithm
class Strategy {
    execute() { }
}

// Define ConcreteStrategy classes, which implement the Strategy interface and provide a specific algorithm
class ConcreteStrategyA extends Strategy {
    execute() {
        console.log("Executing strategy A");
    }
}

class ConcreteStrategyB extends Strategy {
    execute() {
        console.log("Executing strategy B");
    }
}

// Define the Context class, which maintains a reference to the current strategy and delegates to it to perform the algorithm
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy() {
        this.strategy.execute();
    }
}

// Use the Context and ConcreteStrategy classes to perform different algorithms
const context = new Context(new ConcreteStrategyA());

context.executeStrategy(); // Output: Executing strategy A

context.setStrategy(new ConcreteStrategyB());
context.executeStrategy(); // Output: Executing strategy B
