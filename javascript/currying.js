// Function currying using bind nand closure

let multiply = function(x,y) {
    return x*y;
}

let multiply2nos = multiply.bind(this, 2);
console.log(multiply2nos(3));


//Using closure
let Multiply = function(x) {
    return function(y){
        return x*y;
    }
}
console.log(Multiply(2)(3));