//observer pattern
// Observer pattern allows us to decouple the state of an object from its observers and provide a way for multiple objects to be notified of changes to the state of another object. This can be useful in situations where we need to update multiple objects when a specific object changes state, such as in a user interface or game.
//notify others about changes

// Define the Subject interface, which provides methods for adding, removing, and notifying observers
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this);
        }
    }
}

// Define the Observer interface, which provides a method for updating the state of the observer
class Observer {
    update(subject) { }
}

// Define ConcreteObserver classes, which implement the Observer interface and update their state when notified by the Subject
class ConcreteObserverA extends Observer {
    update(subject) {
        console.log(`ConcreteObserverA updated with state ${subject.getState()}`);
    }
}

class ConcreteObserverB extends Observer {
    update(subject) {
        console.log(`ConcreteObserverB updated with state ${subject.getState()}`);
    }
}

// Use the Subject and Observer classes to observe changes to the state of the Subject
class ConcreteSubject extends Subject {
    constructor() {
        super();
        this.state = "";
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
        this.notifyObservers();
    }
}

// Use the ConcreteSubject and ConcreteObserver classes to observe changes to the state of the ConcreteSubject
const subject = new ConcreteSubject();

const observerA = new ConcreteObserverA();
const observerB = new ConcreteObserverB();

subject.addObserver(observerA);
subject.addObserver(observerB);

subject.setState("State 1");
subject.setState("State 2");

subject.removeObserver(observerB);

subject.setState("State 3");
