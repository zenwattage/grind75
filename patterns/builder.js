//builder
//build object step by step

//lego master
function Director() {
    this.construct = function (builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}

//lego builder
function CarBuilder() {
    this.car = null;
    this.step1 = function () {
        this.car = new Car();
    }
    this.step2 = function () {
        this.car.addParts();
    }
    this.get = function () {
        return this.car;
    }
}

//lego
function Car() {
    this.name = null;
    this.price = null;
    this.addParts = function () {
        this.name = "Civic";
        this.price = 10000;
    }
}

//client

var director = new Director();
var carBuilder = new CarBuilder();
var car = director.construct(carBuilder);
console.log(car.name);
console.log(car.price);

