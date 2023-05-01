# Define the Observer interface, which defines the interface for an observer object
class Observer:
    def update(self, subject):
        pass

# Define the Observable interface, which defines the interface for an observable object
class Observable:
    def attach(self, observer):
        pass

    def detach(self, observer):
        pass

    def notify(self):
        pass

# Define the ConcreteObserver class, which implements the Observer interface
class ConcreteObserver(Observer):
    def update(self, subject):
        print(f"Received update from {subject.get_name()}")

# Define the ConcreteObservable class, which implements the Observable interface
class ConcreteObservable(Observable):
    def __init__(self, name):
        self._name = name
        self._observers = []

    def attach(self, observer):
        self._observers.append(observer)

    def detach(self, observer):
        self._observers.remove(observer)

    def notify(self):
        for observer in self._observers:
            observer.update(self)

    def set_name(self, name):
        self._name = name

    def get_name(self):
        return self._name

# Use the Observer and Observable classes to notify observers of changes to an object
observable = ConcreteObservable("Observable")

observer1 = ConcreteObserver()
observer2 = ConcreteObserver()

observable.attach(observer1)
observable.attach(observer2)

observable.set_name("New Observable")

observable.notify()
