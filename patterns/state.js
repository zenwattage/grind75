//state pattern
// State pattern allows us to encapsulate the behavior associated with a particular state and make it easier to add new states or change the behavior associated with existing states. This can be useful in situations where an object has different behaviors based on its internal state, such as a user interface or game.

// Define the State interface, which provides methods for transitioning between states
class State {
    constructor() { }

    handle(context) { }
}

// Define ConcreteState classes, which implement the State interface and define the behavior for a specific state
class ConcreteStateA extends State {
    constructor() {
        super();
    }

    handle(context) {
        console.log("ConcreteStateA handling request.");
        context.setState(new ConcreteStateB());
    }
}

class ConcreteStateB extends State {
    constructor() {
        super();
    }

    handle(context) {
        console.log("ConcreteStateB handling request.");
        context.setState(new ConcreteStateA());
    }
}

// Define the Context class, which maintains a reference to the current state and delegates requests to the current state object
class Context {
    constructor() {
        this.state = new ConcreteStateA();
    }

    setState(state) {
        this.state = state;
    }

    request() {
        this.state.handle(this);
    }
}

// Use the Context and ConcreteState classes to transition between states
const context = new Context();

context.request(); // Output: ConcreteStateA handling request.
context.request(); // Output: ConcreteStateB handling request.
context.request(); // Output: ConcreteStateA handling request.
