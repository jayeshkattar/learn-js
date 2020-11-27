var arr = [34, 67, 23,11,89,76,22,10,52,12];

function Sort() {
    let max = this[0];
    for(let i = 0; i < this.length; i++) {
        for(let j = 0; j < this.length; j++) {
            if(this[i] > this[j]) {
                c = this[i];
                this[i] = this[j];
                this[j] = c;
            }
        }
    }
}
function SecondLargest() {
    console.log("1st largest: ", this.shift());
    console.log("2nd largest: ", this.shift());
}

const sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
},0)
console.log(sum);

Sort.apply(arr);
SecondLargest.apply(arr);
console.log(this.arr);
