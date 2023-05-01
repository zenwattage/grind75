# Define the AbstractFactory class, which provides a common interface for creating products
class AbstractFactory:
    def create_product(self):
        pass

# Define the AbstractProduct class, which defines the interface for Product objects
class AbstractProduct:
    def operation(self):
        pass

# Define ConcreteProductA and ConcreteProductB, which implement the AbstractProduct class
class ConcreteProductA(AbstractProduct):
    def operation(self):
        return "ConcreteProductA operation"

class ConcreteProductB(AbstractProduct):
    def operation(self):
        return "ConcreteProductB operation"

# Define ConcreteFactory1 and ConcreteFactory2, which implement the AbstractFactory class and create ConcreteProduct objects
class ConcreteFactory1(AbstractFactory):
    def create_product(self):
        return ConcreteProductA()

class ConcreteFactory2(AbstractFactory):
    def create_product(self):
        return ConcreteProductB()

# Use the AbstractFactory and ConcreteProduct classes to create families of related objects
def client_code(factory: AbstractFactory):
    product = factory.create_product()
    print(product.operation())

factory1 = ConcreteFactory1()
client_code(factory1) # Output: ConcreteProductA operation

factory2 = ConcreteFactory2()
client_code(factory2) # Output: ConcreteProductB operation
