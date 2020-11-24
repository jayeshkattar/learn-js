//Async request

console.log("Start");
setTimeout(() => {
    console.log("we are in timeout");
}, 2000);

const items = [1,2,3,4,5];
items.forEach(item => {
    console.log(item);
})
console.log("Stop");