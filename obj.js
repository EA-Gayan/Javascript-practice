var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

console.log(assistantManager.health)

console.log("")

//method 2
var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);

console.log("")


//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()



console.log("")


var dog = {
    color: "brown",
    height: 30,
    length: 60
};
dog["type"] = "corgi";

console.log(dog)


console.log("")

var result = "Hello".indexOf('l');
console.log(result)