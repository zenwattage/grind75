//abstract factory pattern 

interface AbstractFactory {
    public AbstractProductA createProductA();
    public AbstractProductB createProductB();
}

class ConcreteFactory1 implements AbstractFactory {
    public AbstractProductA createProductA() {
        return new ProductA1("ProductA1");
    }
    public AbstractProductB createProductB() {
        return new ProductB1("ProductB1");
    }
}

class ConcreteFactory2 implements AbstractFactory {
    public AbstractProductA createProductA() {
        return new ProductA2("ProductA2");
    }
    public AbstractProductB createProductB() {
        return new ProductB2("ProductB2");
    }
}

interface AbstractProductA {
    public String getName();
}

interface AbstractProductB {
    public String getName();
}

class ProductA1 implements AbstractProductA {
    private String name;
    public ProductA1(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
}

class ProductA2 implements AbstractProductA {
    private String name;
    public ProductA2(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
}

class ProductB1 implements AbstractProductB {
    private String name;
    public ProductB1(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
}

class ProductB2 implements AbstractProductB {
    private String name;
    public ProductB2(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
}

class Client {
    private AbstractProductA productA;
    private AbstractProductB productB;
    public Client(AbstractFactory factory) {
        productA = factory.createProductA();
        productB = factory.createProductB();
    }
    public void run() {
        System.out.println(productA.getName());
        System.out.println(productB.getName());
    }
}

public class AbstractFactoryPattern {
    public static void main(String[] args) {
        Client client1 = new Client(new ConcreteFactory1());
        client1.run();
        Client client2 = new Client(new ConcreteFactory2());
        client2.run();
    }
}

