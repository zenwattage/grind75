//proxy pattern
// represent another object
// middle man

// Define the Subject interface, which both the RealSubject and Proxy will implement
class Subject {
    request() { }
}

// Define the RealSubject, which is the object that the Proxy represents and protects
class RealSubject extends Subject {
    request() {
        console.log("RealSubject: Handling request.");
    }
}

// Define the Proxy, which provides the same interface as the RealSubject but controls access to it
class Proxy extends Subject {
    constructor(realSubject) {
        super();
        this.realSubject = realSubject;
    }

    request() {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    checkAccess() {
        console.log("Proxy: Checking access prior to firing a real request.");
        return true;
    }

    logAccess() {
        const now = new Date();
        console.log(`Proxy: Logging the time of request: ${now.toLocaleString()}`);
    }
}

// Create instances of the RealSubject and Proxy
const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);

// Call the request method on the Proxy
proxy.request();
