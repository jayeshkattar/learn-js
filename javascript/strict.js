function myfunction() {
    "use strict"
    console.log(this);
}

myfunction();

const anotherObject = {
    myfunction4() {
        console.log(this)
    }
}
anotherObject.myfunction4()