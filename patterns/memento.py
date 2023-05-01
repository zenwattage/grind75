# Define the Subsystem classes, which are the classes that the Facade encapsulates
class SubsystemA:
    def operation_a(self):
        return "SubsystemA: Doing operation A"

class SubsystemB:
    def operation_b(self):
        return "SubsystemB: Doing operation B"

class SubsystemC:
    def operation_c(self):
        return "SubsystemC: Doing operation C"

# Define the Facade class, which encapsulates the Subsystem classes and provides a simple interface for the client code
class Facade:
    def __init__(self):
        self._subsystem_a = SubsystemA()
        self._subsystem_b = SubsystemB()
        self._subsystem_c = SubsystemC()

    def operation(self):
        result = []
        result.append(self._subsystem_a.operation_a())
        result.append(self._subsystem_b.operation_b())
        result.append(self._subsystem_c.operation_c())
        return "\n".join(result)

# Use the Facade class to perform an operation
facade = Facade()
print(facade.operation())
