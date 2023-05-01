//command pattern
// turn a request into an object
// task wrapper

// Define the Invoker, which will execute the Commands
class Invoker {
    constructor() {
        this.commands = [];
    }

    executeCommand(command) {
        this.commands.push(command);
        command.execute();
    }
}

// Define the Receiver, which will perform the actions requested by the Commands
class Receiver {
    doSomething() {
        console.log("Receiver: Doing something!");
    }

    doSomethingElse() {
        console.log("Receiver: Doing something else!");
    }
}

// Define the Commands
class DoSomethingCommand {
    constructor(receiver) {
        this.receiver = receiver;
    }

    execute() {
        this.receiver.doSomething();
    }
}

class DoSomethingElseCommand {
    constructor(receiver) {
        this.receiver = receiver;
    }

    execute() {
        this.receiver.doSomethingElse();
    }
}

// Create instances of the Invoker, Receiver, and Commands
const invoker = new Invoker();
const receiver = new Receiver();
const command1 = new DoSomethingCommand(receiver);
const command2 = new DoSomethingElseCommand(receiver);

// Execute the Commands through the Invoker
invoker.executeCommand(command1);
invoker.executeCommand(command2);
