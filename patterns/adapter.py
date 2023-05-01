# Define the Target interface, which is the interface expected by the client code
class Target:
    def request(self):
        pass

# Define the Adaptee class, which is the class that needs to be adapted
class Adaptee:
    def specific_request(self):
        return "Adaptee: Doing specific request"

# Define the Adapter class, which adapts the Adaptee class to the Target interface
class Adapter(Target):
    def __init__(self, adaptee):
        self._adaptee = adaptee

    def request(self):
        return f"Adapter: {self._adaptee.specific_request()}"

# Use the Target interface to call the Adapter class, which in turn calls the Adaptee class
adaptee = Adaptee()
adapter = Adapter(adaptee)

print(adapter.request())
