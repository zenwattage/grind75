//interpreter pattern

// Interpreter pattern allows us to define a grammar for a language and provide a way to interpret it. This can be useful in situations where we need to process input in a specific language or provide a way for users to define their own language.
class Context {
    constructor(input) {
        this.input = input;
        this.output = "";
    }

    getInput() {
        return this.input;
    }

    getOutput() {
        return this.output;
    }

    setInput(input) {
        this.input = input;
    }

    setOutput(output) {
        this.output = output;
    }
}

// Define the Expression interface, which provides a method for interpreting a language
class Expression {
    interpret(context) { }
}

// Define TerminalExpression and NonterminalExpression classes, which implement the Expression interface and interpret the language
class TerminalExpression extends Expression {
    interpret(context) {
        context.setOutput(context.getInput().toLowerCase());
    }
}

class NonterminalExpression extends Expression {
    interpret(context) {
        const input = context.getInput();
        context.setOutput(input.substring(0, input.length - 1));
    }
}

// Use the Context, Expression, TerminalExpression, and NonterminalExpression classes to interpret a language
const context = new Context("Hello World\n");

const expressions = [
    new TerminalExpression(),
    new NonterminalExpression(),
    new TerminalExpression(),
];

for (let expression of expressions) {
    expression.interpret(context);
}

console.log(context.getOutput()); // Output: hello world
