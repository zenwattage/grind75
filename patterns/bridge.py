# Define the Abstraction class, which defines the high-level interface that the client uses
class Abstraction:
    def __init__(self, implementation):
        self._implementation = implementation

    def operation(self):
        return f"Abstraction: {self._implementation.operation_implementation()}"

# Define the Implementation interface, which defines the low-level interface for the concrete implementations
class Implementation:
    def operation_implementation(self):
        pass

# Define the ConcreteImplementation classes, which implement the Implementation interface
class ConcreteImplementationA(Implementation):
    def operation_implementation(self):
        return "ConcreteImplementationA: Doing operation"

class ConcreteImplementationB(Implementation):
    def operation_implementation(self):
        return "ConcreteImplementationB: Doing operation"

# Use the Abstraction and Implementation interfaces to create a decoupled hierarchy
implementation_a = ConcreteImplementationA()
abstraction_a = Abstraction(implementation_a)

implementation_b = ConcreteImplementationB()
abstraction_b = Abstraction(implementation_b)

print(abstraction_a.operation())
print(abstraction_b.operation())
