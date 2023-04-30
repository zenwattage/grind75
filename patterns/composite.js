//composite pattern
//create tree-like structure

//tree builder
function TreeBuilder() {
    this.build = function () {
        var tree = new Tree("root");
        var branch1 = new Tree("branch1");
        var branch2 = new Tree("branch2");
        var leaf1 = new Tree("leaf1");
        var leaf2 = new Tree("leaf2");
        var leaf3 = new Tree("leaf3");
        var leaf4 = new Tree("leaf4");

        tree.add(branch1);
        tree.add(branch2);
        branch1.add(leaf1);
        branch1.add(leaf2);
        branch2.add(leaf3);
        branch2.add(leaf4);

        tree.traverse();
    }
}

//tree
function Tree(name) {
    this.name = name;
    this.children = [];
}

Tree.prototype = {
    constructor: Tree,
    add: function (child) {
        this.children.push(child);
    }
    , remove: function (child) {
        var length = this.children.length;
        for (var i = 0; i < length; i++) {
            if (this.children[i] === child) {
                this.children.splice(i, 1);
                return;
            }
        }
    }
    , getChild: function (i) {
        return this.children[i];
    }
    , hasChildren: function () {
        return this.children.length > 0;
    }
    , traverse: function () {
        console.log(this.name);
        var length = this.children.length;
        for (var i = 0; i < length; i++) {
            this.children[i].traverse();
        }
    }
}

//client
var treeBuilder = new TreeBuilder();
treeBuilder.build();

