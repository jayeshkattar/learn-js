
let name1 = {
    fname: "notch",
    lname: "raiser",
}

let name2 = {
    fname: 'dev',
    lname: 'd',
}

printlname = () => {
    console.log(this.fname);
}
printlname.call(name1); // undefined // donot use Arrow fn in call, apply & bind


function printfullname(city, country) {
    console.log(this.fname, this.lname, 'from', city, country)
}

//function borrowing
printfullname.call(name2, 'Livonia', 'US');

function printfull(person) {
    console.log(this.fname, this.lname, 'from', person)
}

//function borrowing
printfullname.apply(name1, ['Livonia', 'US']);

//bind method is exactly same as call, however instead of directly calling 
//create a copy of printfullname & bind to name2 object and then return a function.
let printMyName = printfullname.bind(name2, 'Livonia', 'US');
console.dir(printMyName);
printMyName();


// The difference between bind and call is that bind keeps a copy of the function that can be invoked later.