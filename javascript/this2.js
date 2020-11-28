const obj1 = {
    fname: 'Notch',
    lname: 'Raiser',
    printNormal() {
        console.log('Hello normal fn:', this.fname, this.lname);
    },    
    printArrow: () => {
        console.log('Hello arrow fn:', this.fname, this.lname);
    },
    address: {
        city: 'chcago',
        zip: '60660',
        printArrowAddress: () => {
            console.log('Arrow address: ', this.fname, this.city);
        }
    }

}

obj1.printNormal();
obj1.printArrow();
