# Define the AbstractExpression class, which defines the interface for interpreting an expression
class AbstractExpression:
    def interpret(self):
        pass

# Define the TerminalExpression class, which implements the AbstractExpression interface for a terminal symbol
class TerminalExpression(AbstractExpression):
    def __init__(self, symbol):
        self._symbol = symbol

    def interpret(self):
        if self._symbol == "A":
            return "Result for A"
        elif self._symbol == "B":
            return "Result for B"
        else:
            return "Invalid symbol"

# Define the NonterminalExpression class, which implements the AbstractExpression interface for a nonterminal symbol
class NonterminalExpression(AbstractExpression):
    def __init__(self, expression1, expression2):
        self._expression1 = expression1
        self._expression2 = expression2

    def interpret(self):
        return f"{self._expression1.interpret()} and {self._expression2.interpret()}"

# Use the Interpreter pattern to interpret an expression
terminal_expression_a = TerminalExpression("A")
terminal_expression_b = TerminalExpression("B")
nonterminal_expression = NonterminalExpression(terminal_expression_a, terminal_expression_b)

print(nonterminal_expression.interpret())
