console.log(2 + "2"); // 22
console.log(2 - "2"); // 0
// =================================================
let nums = [1, 2, 3, 2, 4, 3, 3, 3];
nums = new Set(nums);
console.log([...nums]);

let a = ["baba", "black", "sheep", "baba"];
let b = ["twinkle", "black", "baba"];
let c = ["happy", "baba", "twinkle", "star"];

a = new Set(a);
b = new Set(b);
c = new Set(c);
let str = new Set([...a, ...b, ...c]);
console.log([...str]);
// =================================================
// let func = function () {
//   {
//     let l = "let";
//     var v = "var";
//   }
//   console.log(v);
//   console.log(l); // Uncaught ReferenceError: l is not defined
// };
// func();
// =================================================
//Below is immediately invoked function expression
// let func1 = function () {
//   {
//     (function () {
//       let l = "let";
//       var v = "var";
//     })();
//   }
//   console.log(v); // Uncaught ReferenceError: v is not defined
//   console.log(l); // Uncaught ReferenceError: l is not defined
// };
// func1();
// =================================================

console.log(5<6<7); //true // true < 7  // 1 < 7
console.log(7>6>5); //false  // true > 5  // 1 > 5
// =================================================

let profile = {
    name: 'notch',
};
// Object.freeze(profile);

//You should not allow user to add properties or change current property as below? 
//what should you do?  Object.freeze(profile);
profile.age = 30

//Now how to allow user to change property but not add
//  Object.seal(profile);

Object.defineProperty(profile, 'age', {
    value: 3,
    writable: false,
})

console.log(profile);

console.log(Math.max()); //-Infinity
