# Define the Iterable interface, which defines the interface for an iterable object
class Iterable:
    def create_iterator(self):
        pass

# Define the Iterator interface, which defines the interface for an iterator object
class Iterator:
    def has_next(self):
        pass

    def next(self):
        pass

# Define the ConcreteIterable class, which implements the Iterable interface
class ConcreteIterable(Iterable):
    def __init__(self):
        self._items = []

    def create_iterator(self):
        return ConcreteIterator(self)

    def add_item(self, item):
        self._items.append(item)

    def get_items(self):
        return self._items

# Define the ConcreteIterator class, which implements the Iterator interface
class ConcreteIterator(Iterator):
    def __init__(self, iterable):
        self._iterable = iterable
        self._position = 0

    def has_next(self):
        return self._position < len(self._iterable.get_items())

    def next(self):
        if not self.has_next():
            raise StopIteration()
        item = self._iterable.get_items()[self._position]
        self._position += 1
        return item

# Use the Iterable and Iterator classes to iterate over a collection of items
iterable = ConcreteIterable()
iterable.add_item("Item 1")
iterable.add_item("Item 2")
iterable.add_item("Item 3")

iterator = iterable.create_iterator()
while iterator.has_next():
    item = iterator.next()
    print(item)
