// Homework Assignment # 13 - Classes

class Vehicle {
    constructor(make, model, year, weight) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.needsMaintenance = false;
        this.tripsSinceMaintenance = 0;
    }

    setMake(newMake) {
        this.make = newMake;
    }

    setModel(newModel) {
        this.model = newModel;
    }

    setYear(newYear) {
        this.year = newYear;
    }

    setWeight(newWeight) {
        this.weight = newWeight;
    }

    repair() {
        this.needsMaintenance = false;
        this.tripsSinceMaintenance = 0;
    }

    toString() {
        return `make: ${this.make}, model: ${this.model}, year: ${this.year}, weight: ${this.weight}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, weight) {
        super(make, model, year, weight);
        this.isDriving = false;
    }

    drive() {
        this.isDriving = true;
    }

    stop() {
        if (this.isDriving) {
            this.isDriving = false;
            this.tripsSinceMaintenance++;
            this.needsMaintenance = this.tripsSinceMaintenance > 100;
        }
    }

    toString() {
        return 'Car{' + super.toString() + '}';
    }
}

class Plane extends Vehicle {
    constructor(make, model, year, weight) {
        super(make, model, year, weight);
        this.isFlying = false;
    }

    fly() {
        if (this.needsMaintenance) {
            console.log(
                'The plane cannot take off until it is repaired. Trips since last maintenance: ' +
                    this.tripsSinceMaintenance
            );
            return false;
        }
        this.isFlying = true;
        return true;
    }

    land() {
        if (this.isFlying) {
            this.isFlying = false;
            this.tripsSinceMaintenance++;
            this.needsMaintenance = this.tripsSinceMaintenance > 100;
        }
    }

    toString() {
        return 'Plane{' + super.toString() + '}';
    }
}

let cars = [];

cars.push(new Car('BMW', 'MINI', '2015', '1300'));
cars.push(new Car('Tesla', 'Model X', '2020', '2400'));
cars.push(new Car('Porsche', '911', '2017', '1600'));

let boeing = new Plane('Boeing', '747', '2006', '185000');

for (let i = 0; i < 102; i++) {
    index = Math.floor(Math.random() * (cars.length - 1));
    cars[index].drive();
    cars[index].stop();
    boeing.fly();
    boeing.land();
}

for (car of cars) console.log(car);

console.log(boeing);

boeing.repair();
console.log(boeing);

boeing.fly();
boeing.land();
console.log(boeing);
