//bridge pattern
//link what it is to how it works

//abstraction
function Car(model, price) {
    this.model = model;
    this.price = price;
}

Car.prototype = {
    constructor: Car,
    assemble: function () {
        console.log("Assemble");
    }
}

//refined abstraction
function Civic(model, price) {
    Car.call(this, model, price);
}

Civic.prototype = Object.create(Car.prototype);
Civic.prototype.constructor = Civic;

Civic.prototype.assemble = function () {
    console.log("Civic");
}

//refined abstraction
function Accord(model, price) {
    Car.call(this, model, price);
}

Accord.prototype = Object.create(Car.prototype);
Accord.prototype.constructor = Accord;

Accord.prototype.assemble = function () {
    console.log("Accord");
}

//client
var civic = new Civic("Civic", 10000);
civic.assemble();

var accord = new Accord("Accord", 20000);
accord.assemble();




