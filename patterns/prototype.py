import copy

# Define the Prototype class, which is the class to be cloned
class Prototype:
    def clone(self):
        pass

# Define the ConcretePrototype classes, which are the classes to be cloned
class ConcretePrototypeA(Prototype):
    def __init__(self, value):
        self._value = value

    def get_value(self):
        return self._value

    def clone(self):
        return copy.copy(self)

class ConcretePrototypeB(Prototype):
    def __init__(self, value):
        self._value = value

    def get_value(self):
        return self._value

    def clone(self):
        return copy.copy(self)

# Use the Prototype pattern to clone objects
prototype_a = ConcretePrototypeA(1)
prototype_b = ConcretePrototypeB(2)

clone_a = prototype_a.clone()
clone_b = prototype_b.clone()

print(clone_a.get_value())
print(clone_b.get_value())
