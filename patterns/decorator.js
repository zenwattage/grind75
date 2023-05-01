//decorator pattern
// add new features to existing objects

// Define the Component interface, which specifies the methods that ConcreteComponents and Decorators must implement
class Component {
    operation() { }
}

// Define the ConcreteComponent, which implements the Component interface and provides the core functionality
class ConcreteComponent extends Component {
    operation() {
        console.log("ConcreteComponent: Operation");
    }
}

// Define the Decorator, which implements the Component interface and adds behavior to the ConcreteComponent
class Decorator extends Component {
    constructor(component) {
        super();
        this.component = component;
    }

    operation() {
        this.component.operation();
    }
}

// Define ConcreteDecorators, which add specific behavior to the Component
class ConcreteDecoratorA extends Decorator {
    constructor(component) {
        super(component);
    }

    operation() {
        super.operation();
        console.log("ConcreteDecoratorA: Operation");
    }
}

class ConcreteDecoratorB extends Decorator {
    constructor(component) {
        super(component);
    }

    operation() {
        super.operation();
        this.addBehavior();
    }

    addBehavior() {
        console.log("ConcreteDecoratorB: Added behavior");
    }
}

// Use the Decorators to add behavior to the ConcreteComponent
const component = new ConcreteComponent();
const decoratorA = new ConcreteDecoratorA(component);
const decoratorB = new ConcreteDecoratorB(decoratorA);

decoratorB.operation();

/* In this example, we have a Component interface that specifies the methods that ConcreteComponents and Decorators must implement.We define a ConcreteComponent class that implements the Component interface and provides the core functionality.

We define a Decorator class that implements the Component interface and adds behavior to the ConcreteComponent.The Decorator class contains a reference to a Component object, which it decorates by calling the component's operation method and then adding its own behavior.

We define ConcreteDecorator classes that add specific behavior to the Component.Each ConcreteDecorator takes a Component object as a parameter and adds its own behavior to the decorated component's operation method.

We create instances of the ConcreteComponent and use ConcreteDecorator classes to add behavior to it.We can chain multiple decorators together to add multiple behaviors to the ConcreteComponent.

In this way, the Decorator pattern allows us to add behavior to objects dynamically at runtime by wrapping them in a series of Decorator objects.This can be useful in situations where we want to add behavior to an object without modifying its source code. */