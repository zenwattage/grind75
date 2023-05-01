# Define the Product class, which represents the complex object to be created
class Product:
    def __init__(self):
        self._part_a = None
        self._part_b = None

    def set_part_a(self, part_a):
        self._part_a = part_a

    def set_part_b(self, part_b):
        self._part_b = part_b

    def get_parts(self):
        return f"Part A: {self._part_a}, Part B: {self._part_b}"

# Define the Builder interface, which defines the methods for creating parts of the Product object
class Builder:
    def build_part_a(self):
        pass

    def build_part_b(self):
        pass

    def get_product(self):
        pass

# Define the ConcreteBuilder class, which implements the Builder interface and creates the Product object
class ConcreteBuilder(Builder):
    def __init__(self):
        self._product = Product()

    def build_part_a(self):
        self._product.set_part_a("Part A")

    def build_part_b(self):
        self._product.set_part_b("Part B")

    def get_product(self):
        return self._product

# Define the Director class, which controls the construction of the Product object using the Builder interface
class Director:
    def __init__(self, builder):
        self._builder = builder

    def construct(self):
        self._builder.build_part_a()
        self._builder.build_part_b()

# Use the Builder and Director classes to create a Product object
builder = ConcreteBuilder()
director = Director(builder)
director.construct()

product = builder.get_product()
print(product.get_parts())
