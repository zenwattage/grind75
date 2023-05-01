//memento pattern
//capture and store object state so that it can be restored later

// Define the Memento interface, which provides methods for getting and setting the state of an object
class Memento {
    constructor(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}

// Define the Originator class, which is the object that we want to save and restore its state
class Originator {
    constructor() {
        this.state = "";
    }

    setState(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    createMemento() {
        return new Memento(this.state);
    }

    restoreMemento(memento) {
        this.state = memento.getState();
    }
}

// Define the Caretaker class, which is responsible for saving and restoring the state of the Originator
class Caretaker {
    constructor() {
        this.mementos = [];
    }

    addMemento(memento) {
        this.mementos.push(memento);
    }

    getMemento(index) {
        return this.mementos[index];
    }
}

// Use the Originator and Caretaker to save and restore the state of the Originator
const originator = new Originator();
const caretaker = new Caretaker();

originator.setState("State 1");
caretaker.addMemento(originator.createMemento());

originator.setState("State 2");
caretaker.addMemento(originator.createMemento());

originator.setState("State 3");
caretaker.addMemento(originator.createMemento());

console.log(originator.getState()); // Output: State 3

const memento2 = caretaker.getMemento(1);
originator.restoreMemento(memento2);

console.log(originator.getState()); // Output: State 2
