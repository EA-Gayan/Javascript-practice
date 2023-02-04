console.log("Q1") // question 1

var currecyOne = 260;
var exchangeRate = 1.2;

function convertCurrency(a,r){
    return a*r
}

var currecytwo= convertCurrency(currecyOne,exchangeRate)
console.log(currecytwo)

console.log("")
console.log("Q2") // question 2

var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) 
virtualPet.nap()
console.log(virtualPet.sleepy)