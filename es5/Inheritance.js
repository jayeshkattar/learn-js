// Constructor Function
function Book(title, author, year) {
    this.title = title,
    this.author = author,
    this.year = year
    // this.getDetails = function() {
    //     return this.title + 'is written by ' + this.author +' in ' + this.year
    // }
}

Book.prototype.getDetails = function() {
    return this.title + ' is written by ' + this.author +' in ' + this.year    
}

Book.prototype.getAge = function() {
    var years = new Date().getFullYear() - this.year;
    return this.title + ' is ' + years + ' years old.';
}
//Change year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revise = true;
}

var book1 = new Book('Elloquent Javascript', 'Elliot T', 2001);
book1.revise(2016);
console.log(book1);

//Magazine Constructor
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}
//Inherit prototype
Magazine.prototype = Object.create(Book.prototype);
// Use magazine constructor inside magazine object
Magazine.prototype.constructor = Magazine;

Magazine.prototype.getMagDetails = function(){
    return this.getDetails() + ' which published in the month of ' + this.month;
}

var mag1 = new Magazine('India Today', 'Aaj Tak', 1998, 12);
console.log(mag1);
console.log(mag1.getMagDetails());
