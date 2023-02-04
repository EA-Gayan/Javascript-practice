var bird ={
    can_fly:true,
    has_feathers:true,
    can_swim:false
}
console.log(bird.can_swim)

var bir1 = Object.create(bird);
console.log("bird1 can fly:",bir1.can_fly)
console.log("bird1 has feathers:",bir1.has_feathers)
bir1.can_swim=true
console.log("bird1 can swim:",bir1.can_swim)