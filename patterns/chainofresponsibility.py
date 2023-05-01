# Define the Handler interface, which defines the interface for handling requests
class Handler:
    def set_next(self, handler):
        pass

    def handle(self, request):
        pass

# Define the AbstractHandler class, which implements the Handler interface and provides a default implementation of set_next
class AbstractHandler(Handler):
    def __init__(self):
        self._next_handler = None

    def set_next(self, handler):
        self._next_handler = handler
        return handler

    def handle(self, request):
        if self._next_handler is not None:
            return self._next_handler.handle(request)
        else:
            return None

# Define the ConcreteHandler class, which implements the Handler interface and handles requests
class ConcreteHandler1(AbstractHandler):
    def handle(self, request):
        if request == "handler1":
            return f"Handled by {type(self).__name__}"
        else:
            return super().handle(request)

class ConcreteHandler2(AbstractHandler):
    def handle(self, request):
        if request == "handler2":
            return f"Handled by {type(self).__name__}"
        else:
            return super().handle(request)

class ConcreteHandler3(AbstractHandler):
    def handle(self, request):
        if request == "handler3":
            return f"Handled by {type(self).__name__}"
        else:
            return super().handle(request)

# Use the Handler classes to handle requests
handler1 = ConcreteHandler1()
handler2 = ConcreteHandler2()
handler3 = ConcreteHandler3()

handler1.set_next(handler2).set_next(handler3)

print(handler1.handle("handler1"))
print(handler1.handle("handler2"))
print(handler1.handle("handler3"))
