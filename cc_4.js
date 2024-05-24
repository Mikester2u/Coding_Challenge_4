//U22562170

class Car {
    constructor(make,speed) {
        this.make = make;
        this.speed = speed;
    }

accelerate () {
    this.speed += 10;
    }

brake () {
    this.speed -= 5;
    }

}

class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }
}

EV.prototype.chargeBattery = function(chargeTo) {
    console.log("Battery charged to " + this.charge);
    
}