
let Person = {
    fname: "notch",
    lname: "raiser",
    printfullname: () => console.log(this.fname, this.lname),
}

Person.printfullname();