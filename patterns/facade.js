//facade pattern
//single interface to all functions

// Define a complex system with multiple subsystems
class Subsystem1 {
    operation1() {
        console.log("Subsystem1: Ready!");
    }
}

class Subsystem2 {
    operation2() {
        console.log("Subsystem2: Go!");
    }
}

class Subsystem3 {
    operation3() {
        console.log("Subsystem3: Fire!");
    }
}

// Define a Facade that provides a simple interface to the complex system
class Facade {
    constructor() {
        this.subsystem1 = new Subsystem1();
        this.subsystem2 = new Subsystem2();
        this.subsystem3 = new Subsystem3();
    }

    start() {
        this.subsystem1.operation1();
        this.subsystem2.operation2();
        this.subsystem3.operation3();
    }
}

// Use the Facade to simplify access to the subsystems
const facade = new Facade();
facade.start();

//output:
//Assemble
//Paint
//Sell

