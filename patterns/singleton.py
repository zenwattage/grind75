# Define the Singleton class, which provides a single instance of an object
class Singleton:
    __instance = None

    @staticmethod
    def get_instance():
        if Singleton.__instance is None:
            Singleton()
        return Singleton.__instance

    def __init__(self):
        if Singleton.__instance is not None:
            raise Exception("Singleton class should only have one instance.")
        else:
            Singleton.__instance = self

    def do_something(self):
        print("Doing something...")

# Use the Singleton class to create a single instance of an object
singleton = Singleton.get_instance()
singleton.do_something()

# Attempt to create another instance of the Singleton class
another_singleton = Singleton()
