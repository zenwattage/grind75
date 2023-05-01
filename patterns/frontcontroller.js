//front controller pattern

//Front Controller pattern allows us to centralize request handling and provide a single point of entry for requests. This can be useful in situations where we have multiple handlers for different requests, or when we need to perform some common tasks (such as authentication or logging) for every request.

// Define the Dispatcher class, which acts as the front controller and dispatches requests to the appropriate handler
class Dispatcher {
    constructor() {
        this.handlers = {};
        this.defaultHandler = null;
    }

    registerHandler(handlerName, handler) {
        this.handlers[handlerName] = handler;
    }

    setDefaultHandler(handler) {
        this.defaultHandler = handler;
    }

    dispatchRequest(request) {
        if (request in this.handlers) {
            this.handlers[request].handleRequest();
        } else if (this.defaultHandler !== null) {
            this.defaultHandler.handleRequest();
        } else {
            console.log("Error: no handler found for request.");
        }
    }
}

// Define Handler classes, which handle specific requests
class HomeHandler {
    handleRequest() {
        console.log("Displaying Home Page");
    }
}

class AboutHandler {
    handleRequest() {
        console.log("Displaying About Page");
    }
}

class ContactHandler {
    handleRequest() {
        console.log("Displaying Contact Page");
    }
}

class DefaultHandler {
    handleRequest() {
        console.log("Displaying Error Page");
    }
}

// Use the Dispatcher and Handler classes to handle requests
const dispatcher = new Dispatcher();

const homeHandler = new HomeHandler();
const aboutHandler = new AboutHandler();
const contactHandler = new ContactHandler();
const defaultHandler = new DefaultHandler();

dispatcher.registerHandler("home", homeHandler);
dispatcher.registerHandler("about", aboutHandler);
dispatcher.registerHandler("contact", contactHandler);
dispatcher.setDefaultHandler(defaultHandler);

dispatcher.dispatchRequest("home"); // Output: Displaying Home Page
dispatcher.dispatchRequest("about"); // Output: Displaying About Page
dispatcher.dispatchRequest("contact"); // Output: Displaying Contact Page
dispatcher.dispatchRequest("invalid"); // Output: Displaying Error Page
