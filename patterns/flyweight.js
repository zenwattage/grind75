//flyweight pattern
//share objects to reduce memory usage
//share small reusable items

// Define a Flyweight factory that creates and manages shared Flyweight objects
class FlyweightFactory {
    constructor() {
        this.flyweights = {};
    }

    getFlyweight(key) {
        if (!this.flyweights[key]) {
            this.flyweights[key] = new ConcreteFlyweight(key);
        }
        return this.flyweights[key];
    }

    getCount() {
        return Object.keys(this.flyweights).length;
    }
}

// Define the Flyweight interface, which specifies the methods that ConcreteFlyweights must implement
class Flyweight {
    operation(extrinsicState) { }
}

// Define the ConcreteFlyweight, which implements the Flyweight interface and stores intrinsic state
class ConcreteFlyweight extends Flyweight {
    constructor(key) {
        super();
        this.intrinsicState = key;
        console.log(`ConcreteFlyweight: Creating instance for ${key}`);
    }

    operation(extrinsicState) {
        console.log(`ConcreteFlyweight: Operation with extrinsic state ${extrinsicState} and intrinsic state ${this.intrinsicState}`);
    }
}

// Use the FlyweightFactory to create and manage Flyweights
const factory = new FlyweightFactory();

const flyweight1 = factory.getFlyweight("key1");
flyweight1.operation("state1");

const flyweight2 = factory.getFlyweight("key2");
flyweight2.operation("state2");

const flyweight3 = factory.getFlyweight("key1");
flyweight3.operation("state3");

console.log(`Number of Flyweights created: ${factory.getCount()}`);

