function myfunction(){
    var a = 12;
}

//console.log(a); // Uncaught ReferenceError: a is not defined

function counter() {
    let count = 0;
    return function() {
        count++;
        console.log("count ", count);
    }
}

let myResult = counter()
myResult();
myResult();
console.dir(myResult);

function sum(a) {
    return function(b){
        return function(c){
            console.log(a+b+c);
        }
    }
}
sum(2)(3)(4);
console.dir(sum(2)(3));