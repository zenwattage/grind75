//builder
//build object step by step

// Define the Product class that the Builder builds
class Product {
    constructor() {
        this.parts = [];
    }

    add(part) {
        this.parts.push(part);
    }

    show() {
        console.log(`Product Parts: ${this.parts.join(", ")}`);
    }
}

// Define the Builder interface, which specifies methods for building the Product
class Builder {
    buildPartA() { }
    buildPartB() { }
    buildPartC() { }
    getResult() { }
}

// Define a Concrete Builder, which implements the Builder interface and builds a specific Product
class ConcreteBuilder extends Builder {
    constructor() {
        super();
        this.product = new Product();
    }

    buildPartA() {
        this.product.add("Part A");
    }

    buildPartB() {
        this.product.add("Part B");
    }

    buildPartC() {
        this.product.add("Part C");
    }

    getResult() {
        return this.product;
    }
}

// Use the Director to construct a Product using the ConcreteBuilder
class Director {
    constructor(builder) {
        this.builder = builder;
    }

    construct() {
        this.builder.buildPartA();
        this.builder.buildPartB();
        this.builder.buildPartC();
        return this.builder.getResult();
    }
}

// Use the Director and ConcreteBuilder to create a Product
const builder = new ConcreteBuilder();
const director = new Director(builder);
const product = director.construct();

product.show();

