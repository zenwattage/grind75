//mediator pattern
// Define an object that encapsulates how a set of objects interact
//simplify communication between objects/classes

// Define the Mediator interface, which provides methods for communication between Colleague objects
class Mediator {
    send(message, colleague) { }
}

// Define Colleague classes, which represent objects that communicate with each other through the Mediator
class Colleague {
    constructor(mediator) {
        this.mediator = mediator;
    }

    send(message) {
        this.mediator.send(message, this);
    }

    receive(message) {
        console.log(`${this.constructor.name} received message: ${message}`);
    }
}

class ConcreteColleagueA extends Colleague {
    constructor(mediator) {
        super(mediator);
    }
}

class ConcreteColleagueB extends Colleague {
    constructor(mediator) {
        super(mediator);
    }
}

// Use the Mediator to facilitate communication between Colleague objects
class ConcreteMediator extends Mediator {
    constructor() {
        super();
        this.colleagueA = null;
        this.colleagueB = null;
    }

    setColleagueA(colleagueA) {
        this.colleagueA = colleagueA;
    }

    setColleagueB(colleagueB) {
        this.colleagueB = colleagueB;
    }

    send(message, colleague) {
        if (colleague === this.colleagueA) {
            this.colleagueB.receive(message);
        } else if (colleague === this.colleagueB) {
            this.colleagueA.receive(message);
        }
    }
}

// Use the Mediator and Colleague objects to communicate with each other
const mediator = new ConcreteMediator();

const colleagueA = new ConcreteColleagueA(mediator);
const colleagueB = new ConcreteColleagueB(mediator);

mediator.setColleagueA(colleagueA);
mediator.setColleagueB(colleagueB);

colleagueA.send("Hello from Colleague A!");
colleagueB.send("Hello from Colleague B!");
