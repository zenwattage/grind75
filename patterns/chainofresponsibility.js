//chain of responsibility pattern
//pass request along chain of objects

// Define the Handler interface, which specifies the method for handling requests
class Handler {
    constructor() {
        this.nextHandler = null;
    }

    setNext(handler) {
        this.nextHandler = handler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return null;
    }
}

// Define the Concrete Handlers, which implement the Handler interface and handle specific requests
class ConcreteHandler1 extends Handler {
    handle(request) {
        if (request === "request1") {
            console.log("ConcreteHandler1: Handling request1");
            return true;
        } else {
            return super.handle(request);
        }
    }
}

class ConcreteHandler2 extends Handler {
    handle(request) {
        if (request === "request2") {
            console.log("ConcreteHandler2: Handling request2");
            return true;
        } else {
            return super.handle(request);
        }
    }
}

class ConcreteHandler3 extends Handler {
    handle(request) {
        if (request === "request3") {
            console.log("ConcreteHandler3: Handling request3");
            return true;
        } else {
            return super.handle(request);
        }
    }
}

// Create the chain of responsibility by linking the handlers together
const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();
const handler3 = new ConcreteHandler3();

handler1.setNext(handler2);
handler2.setNext(handler3);

// Send requests through the chain of responsibility
handler1.handle("request1");
handler1.handle("request2");
handler1.handle("request3");
