let fruits = ["apple", "mango","orange","pineapple","banana"];

function showFruit(a,b,c,d,e){
    console.log("fruit no1",a);
    console.log("fruit no2",b);
    console.log("fruit no3",c);
    console.log("fruit no4",d);
    console.log("fruit no5",e);
}

showFruit(...fruits);

/* spread operator (...) pass all array elements into a function 
without having to type them all individually*/


console.log("");
console.log("Rest Operator");

const []=fruits;
const [a,b,...d]=fruits;
console.log(d);



function taxCal(rate,...deposite){
    return deposite.map(deposite=> rate*deposite);
}
let money =taxCal(.21,230,432,123,345,653,7563);
console.log(money);