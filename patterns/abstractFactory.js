//abstract factory pattern

//create group of related items

// Define the Abstract Factory interface, which specifies the methods for creating products
class AbstractFactory {
    createProductA() { }
    createProductB() { }
}

// Define Concrete Factories that implement the Abstract Factory interface
class ConcreteFactory1 extends AbstractFactory {
    createProductA() {
        return new ProductA1();
    }

    createProductB() {
        return new ProductB1();
    }
}

class ConcreteFactory2 extends AbstractFactory {
    createProductA() {
        return new ProductA2();
    }

    createProductB() {
        return new ProductB2();
    }
}

// Define the Abstract Product interface, which specifies the methods for products created by the factory
class AbstractProductA {
    operationA() { }
}

class AbstractProductB {
    operationB() { }
}

// Define Concrete Products that implement the Abstract Product interface
class ProductA1 extends AbstractProductA {
    operationA() {
        console.log("ProductA1: OperationA");
    }
}

class ProductA2 extends AbstractProductA {
    operationA() {
        console.log("ProductA2: OperationA");
    }
}

class ProductB1 extends AbstractProductB {
    operationB() {
        console.log("ProductB1: OperationB");
    }
}

class ProductB2 extends AbstractProductB {
    operationB() {
        console.log("ProductB2: OperationB");
    }
}

// Use the Concrete Factory to create and use Concrete Products
const factory1 = new ConcreteFactory1();
const productA1 = factory1.createProductA();
const productB1 = factory1.createProductB();

const factory2 = new ConcreteFactory2();
const productA2 = factory2.createProductA();
const productB2 = factory2.createProductB();

productA1.operationA();
productB1.operationB();
productA2.operationA();
productB2.operationB();
