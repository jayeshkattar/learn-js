function myfunction() {
  var a = 12;
}

//console.log(a); // Uncaught ReferenceError: a is not defined

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log("count ", count);
  };
}

let myResult = counter();
myResult();
myResult();
console.dir(myResult);

function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}

let SUM = (a) => (b) => {
  return b ? SUM(a + b) : a;
};
console.log(SUM(2)(3)());
console.dir(sum(2)(3));
