//prototype pattern
//create copies from examples
//
// Define the Prototype interface, which specifies the clone method
class Prototype {
    clone() { }
}

// Define Concrete Prototypes, which implement the Prototype interface and provide a way to clone themselves
class ConcretePrototype1 extends Prototype {
    constructor() {
        super();
        this.property1 = "Property 1";
        this.property2 = "Property 2";
    }

    clone() {
        return new ConcretePrototype1();
    }
}

class ConcretePrototype2 extends Prototype {
    constructor() {
        super();
        this.property3 = "Property 3";
        this.property4 = "Property 4";
    }

    clone() {
        return new ConcretePrototype2();
    }
}

// Use the Concrete Prototypes to create new objects
const prototype1 = new ConcretePrototype1();
const clone1 = prototype1.clone();

const prototype2 = new ConcretePrototype2();
const clone2 = prototype2.clone();
