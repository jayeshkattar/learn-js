
var myfunction1 = () => { 
    console.log(this, "var arrow function"); 
}

const myfunction2 = () => { 
    console.log(this, "const arrow function"); 
}

let myfunction3 = () => { 
    console.log(this, "let arrow function"); 
}
function myfunction() {
    console.log("normal fn");
}

myfunction1();  // this = global  arrow function
myfunction2();
myfunction3();

myfunction();

