# Define the Component interface, which defines the interface for the ConcreteComponent and Decorator classes
class Component:
    def operation(self):
        pass

# Define the ConcreteComponent class, which implements the Component interface and provides the basic behavior
class ConcreteComponent(Component):
    def operation(self):
        return "ConcreteComponent: Doing basic operation"

# Define the Decorator class, which implements the Component interface and adds new behavior to the ConcreteComponent class
class Decorator(Component):
    def __init__(self, component):
        self._component = component

    def operation(self):
        return self._component.operation()

# Define the ConcreteDecorator class, which extends the Decorator class and adds new behavior to the ConcreteComponent class
class ConcreteDecoratorA(Decorator):
    def operation(self):
        return f"ConcreteDecoratorA: Adding new behavior to {self._component.operation()}"

class ConcreteDecoratorB(Decorator):
    def operation(self):
        return f"ConcreteDecoratorB: Adding new behavior to {self._component.operation()}"

# Use the ConcreteComponent and ConcreteDecorator classes to add behavior to the ConcreteComponent object
component = ConcreteComponent()
decorator_a = ConcreteDecoratorA(component)
decorator_b = ConcreteDecoratorB(decorator_a)

print(component.operation())
print(decorator_a.operation())
print(decorator_b.operation())
