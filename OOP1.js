var purchase1 = {
    shoes : 100,
    Tax: 1.2,
    totalPrice: function(){
        var cal=this.shoes*this.Tax;
        console.log("total Price",cal)
    }
}
purchase1.totalPrice();


var purchase1 = {
    shoes : 10,
    Tax: 1.2,
    totalPrice: function(){
        var cal=this.shoes*this.Tax;
        console.log("total Price",cal)
    }
}
purchase1.totalPrice();