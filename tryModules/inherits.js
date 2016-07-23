var util = require('util');

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log("Бродит " + this.name);
};

function Rabbit(name) {
    this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function () {
    console.log("Джампает " + this.name);
};

var rabbit = new Rabbit("долбанный кролик");
rabbit.walk();
rabbit.jump();