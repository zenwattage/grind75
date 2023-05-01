# Define the Subject interface, which defines the interface for the RealSubject and Proxy classes
class Subject:
    def request(self):
        pass

# Define the RealSubject class, which implements the Subject interface and performs the real operation
class RealSubject(Subject):
    def request(self):
        print("RealSubject: Handling request")

# Define the Proxy class, which implements the Subject interface and controls access to the RealSubject class
class Proxy(Subject):
    def __init__(self, real_subject):
        self._real_subject = real_subject

    def request(self):
        if self.check_access():
            self._real_subject.request()

    def check_access(self):
        print("Proxy: Checking access")
        return True

# Use the Proxy and RealSubject classes to perform an operation
real_subject = RealSubject()
proxy = Proxy(real_subject)

proxy.request()
