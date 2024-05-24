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

    chargeBattery(chargeTo) {
        this.charge = chargeTo;
    }

    accelerate () {
        this.speed += 20;
        this.charge -= 1;
        console.log(this.make + "going at 140 km/h, with a charge of " + this.charge);
    }
}
