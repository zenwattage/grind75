//prototype pattern
//create copies from examples
//
//prototype
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

//client
var civic = new Car("Civic", 10000);
civic.assemble();

var accord = new Car("Accord", 20000);
accord.assemble();

