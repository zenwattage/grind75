//abstract factory pattern

//create group of related items

//family creator

//abstract factory
function CarFactory() {
    this.createCar = function (model) {
        var car;
        switch (model) {
            case "Civic":
                car = new Civic();
                break;
            case "Accord":
                car = new Accord();
                break;
            default:
                car = new Civic();
                break;
        }
        return car;
    }
}

//concrete factory
function Civic() {
    this.name = "Civic";
    this.price = 10000;
}

//concrete factory
function Accord() {
    this.name = "Accord";
    this.price = 20000;
}

//client
var carFactory = new CarFactory();
var car = carFactory.createCar("Civic");
console.log(car.name);
console.log(car.price);

var car = carFactory.createCar("Accord");
console.log(car.name);
console.log(car.price);
