// 1. Arrow functions and this
let obj = {
    myVar: 'foo',
    
    myFunc: function() {
      console.log(this.myVar)
    }
  }
  obj.myFunc() // foo

  // obj is the object calling myFunc. It’s myFunc's context. So the value of this in myFunc is bound to obj. 
// ==========================================================================================================

// So if this is bound to the context (i.e. bound to the object that calls a function), it can lead to some very awkward issues
// with callbacks. Let’s add a setTimeout to our obj.myFunc to simulate a callback
let obj = {
    myVar: 'foo',
    
    myFunc: function() { 
      console.log(this.myVar)   
   
      setTimeout(function() {
        console.log(this.myVar)
      }, 1000)
    }
  }
  obj.myFunc() // foo ... then... undefined

  let obj = {
    myVar: 'foo',
    
    myFunc: function() { 
      console.log(this.myVar)  
    
      setTimeout(() => {
        console.log(this.myVar)
      }, 1000)
    }
  }
  obj.myFunc() // foo ... then... foo

  let obj = {
    myVar: 'foo',
    
    myFunc: () => { 
      console.log(this.myVar)  
    }
  }
  obj.myFunc() // undefined

// You might expect this to refer to obj. But arrow functions don’t bind this to the object that called them. They just use the value of this in the scope in which they were defined. 
// In this case, that’s the global object. So arrow functions are unusable for object methods!
// The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.
let me = { 
    name: "Ashutosh Verma", 
    thisInArrow:() => { 
    console.log("My name is " + this.name); // no 'this' binding here // undefined
    }, 
    thisInRegular(){ 
    console.log("My name is " + this.name); // 'this' binding works here 
    } 
   };
   me.thisInArrow(); 
   me.thisInRegular();

// Function expressions are best for object methods. Arrow functions are best for callbacks or methods like map, reduce, or forEach.
// ==========================================================================================================


// 2. Arguments binding
 // Arrow functions do not have an arguments binding. 
let myFunc = {  
    showArgs(){ 
     console.log(arguments); 
    } 
   }; 
   myFunc.showArgs(1, 2, 3, 4);

   let myFunc = {  
    showArgs : () => { 
    console.log(...arguments); 
   } 
  }; 
  myFunc.showArgs(1, 2, 3, 4);  // Reference error: arguments is not defined

  // 3. Using new keyword
  // the arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword.

let add = (x, y) => console.log(x + y);
new add(2,3);  // add is not a constructor

//4. No duplicate named parameters
// Arrow functions can never have duplicate named parameters, whether in strict or non-strict mode.
(x, x) => {}
// SyntaxError: duplicate argument names not allowed in this context