//adapter pattern
//connect different interfaces

// Define the Target interface, which is the interface that the client expects to use
class Target {
    request() { }
}

// Define the Adaptee, which is the object that needs to be adapted
class Adaptee {
    specificRequest() {
        console.log("Adaptee: Specific request");
    }
}

// Define the Adapter, which adapts the Adaptee to the Target interface
class Adapter extends Target {
    constructor(adaptee) {
        super();
        this.adaptee = adaptee;
    }

    request() {
        console.log("Adapter: Adapted request");
        this.adaptee.specificRequest();
    }
}

// Use the Adapter to adapt the Adaptee to the Target interface
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
adapter.request();
