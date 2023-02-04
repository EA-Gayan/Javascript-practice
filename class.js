class Car{
    constructor(color,speed){
        this.color=color;
        this.speed= speed;
    }
    turboOn(){
        console.log("turbo is on!")
    }
}

const car1 = new Car("red",120)
const car2 = Object.create(Car)
car2.speed=150;
car2.color="black";
console.log(car1)
console.log(car2);
