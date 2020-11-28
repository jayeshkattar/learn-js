let name = {
    firstname: 'Notch',
    lastname: 'Raiser',
}

let printName = function(city, state) {
    console.log(this.firstname, this.lastname, city, state);
}

let printMyname = printName.bind(name, 'hyderabad');
//printMyname();

Function.prototype.mybind = function(...args) {
    //this = printName method
    let self = this;
    let params = args.slice(1);
    return function(...args2) {
        self.apply(args[0], [...params, ...args2])
    }
}


let printMyname2 = printName.mybind(name, 'livonia');
//console.dir(printMyname2);
printMyname2('MI');

Function.prototype.nameBind = function(...args) {
    let params = args.slice(1);
    return (...args2) => {
        this.apply(args[0], [...params, ...args2])
    }
}
let printmyName3 = printName.bind(name, "laphbet");
printmyName3("oslo");