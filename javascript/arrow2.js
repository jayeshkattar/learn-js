function myFunction() {
  return () => {
    return this;
  };
}

const myObj = new myFunction();
console.log(myObj());