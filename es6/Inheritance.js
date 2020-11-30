class Book {
    constructor(title, author, year) {
        this.title = title,
        this.author = author,
        this.year = year
    }
    getDetails() {
        return `${this.title} is written by ${this.author} in ${this.year}`    
    }
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`;
    }
    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }
    static topBookStore() {
        return 'Banes & Nobles';
    }
}

const book1 = new Book('Mastery javascript', 'John Dash', '2015');
book1.revise('2019');
console.log(book1.getDetails(), book1.getAge());
console.log(book1);
console.log(Book.topBookStore());

class Magazine extends Book {
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }

    getMagDetails() {
        return this.getDetails() + ' which published in the month of ' + this.month;
    }
}

const mag1 = new Magazine('Tour to India', 'Notch Raiser', '2018', '09');
console.log(mag1);
console.log(mag1.getMagDetails());