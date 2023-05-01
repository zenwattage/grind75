//composite pattern
//create tree-like structure

// Define the Component interface, which provides a common interface for all objects in the composition
class Component {
    constructor(name) {
        this.name = name;
    }

    add(component) { }
    remove(component) { }
    getChild(index) { }
    operation() { }
}

// Define Leaf components, which represent the individual objects in the composition
class Leaf extends Component {
    constructor(name) {
        super(name);
    }

    operation() {
        console.log(`Leaf ${this.name}: Operation`);
    }
}

// Define Composite components, which represent groups of objects in the composition
class Composite extends Component {
    constructor(name) {
        super(name);
        this.children = [];
    }

    add(component) {
        this.children.push(component);
    }

    remove(component) {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
    }

    getChild(index) {
        return this.children[index];
    }

    operation() {
        console.log(`Composite ${this.name}: Operation`);
        for (const child of this.children) {
            child.operation();
        }
    }
}

// Use the Composite to create a tree-like structure of Components
const root = new Composite("Root");
const branch1 = new Composite("Branch 1");
const branch2 = new Composite("Branch 2");

const leaf1 = new Leaf("Leaf 1");
const leaf2 = new Leaf("Leaf 2");
const leaf3 = new Leaf("Leaf 3");
const leaf4 = new Leaf("Leaf 4");

branch1.add(leaf1);
branch1.add(leaf2);

branch2.add(leaf3);
branch2.add(leaf4);

root.add(branch1);
root.add(branch2);

root.operation();


