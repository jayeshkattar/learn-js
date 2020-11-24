// Any thing outside the function can be accessed in inside function
// Examples - axios & fetch
function outerfunction(outervar) {
    return function innerfunction(innervar) {
        console.log("outer var", outervar);
        console.log("inner var", innervar);
    }
}

const Inner = outerfunction("outside");
Inner("inner");

