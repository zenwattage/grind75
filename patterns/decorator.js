//decorator pattern
// add new features to existing objects

//customizer
function Customizer() {
    this.customize = function (car) {
        car.customize();
    }
}

//car
function Car() {
    this.customize = function () {
        console.log("Car");
    }
}

//decorator
function Decorator(car) {
    this.car = car;
    this.customize = function () {
        this.car.customize();
    }
}

//concrete decorator
function ColorDecorator(car) {
    Decorator.call(this, car);
    this.customize = function () {
        this.car.customize();
        console.log("Color");
    }
}

//concrete decorator
function EngineDecorator(car) {
    Decorator.call(this, car);
    this.customize = function () {
        this.car.customize();
        console.log("Engine");
    }
}

//client
var car = new Car();
car.customize();

var colorDecorator = new ColorDecorator(car);
colorDecorator.customize();

var engineDecorator = new EngineDecorator(car);
engineDecorator.customize();

var colorEngineDecorator = new EngineDecorator(colorDecorator);
colorEngineDecorator.customize();

