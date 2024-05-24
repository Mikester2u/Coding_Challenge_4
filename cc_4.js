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
    console.log(this.make + " is going at " + this.speed + " km/h");
    }

}

class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }

    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        console.log("Battery is now at " + this.charge);
    }

    accelerate () {
        this.speed += 20;
        this.charge -= 1;
        console.log(this.make + " going at " + this.speed + " km/h, with a charge of " + this.charge);
    }
}

const ev1 = new EV("Tesla", 120, 23);

ev1.accelerate();
ev1.accelerate();
ev1.brake();
ev1.brake();
ev1.chargeBattery(100);