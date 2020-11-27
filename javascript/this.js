const anotherObject = {
    myfunction4() {
        console.log(this)
    }
}

const obj = {
    myfunction() {
        console.log(this)
    },
    myfunction3() {
        function myfunction4() {
            console.log(this)
        }
        return myfunction4()
    }
}
function myfunction2() {
    console.log(this);    
}

const test1 = obj.myfunction;
test1(); // global  // => invoking fn using this

obj.myfunction(); //obj // => invoking function using obj
obj.myfunction3();  // global // => invoking function4 using global becauses no object is before fn4 call

myfunction2();


anotherObject.myfunction4();  

const newObj = new myfunction2();

//below both are refering to same global this
function myfunction5() {
    return this;    
}
const abc = myfunction5();
const abc2 = myfunction5();
abc.a = 100;
abc2.a = 200;
console.log(abc.a);