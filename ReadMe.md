#Javascript
JS is synchronous single threaded application.  

1. Execution Context
    a. Memory context (variable environment) - variables stored initially as undefined - 
    b. Code context (thread of execution) - code is executed line by line and values of variables are assigned. 

    Global EC & Local EC

2. Call Stack - EC Stack
3. Hoisting
4. window & this = this is always a window object in where ever you access 'this' remains to window object.
5. undefined & not defined
6. Scope & Lexical environment -(lexical means in-hierarcy or in-sequence)
   **Scope** means where you can access specific variable or function in your code.
   **Lexical environment** is the local memory along with lexical environment of parent.
   The way of finding variable if not in local, then look for parent and if not in parent and aging look in grand parent so this looking of variable for child to parent is **scope chain**.
7. let and const declarations are hoisted in the temporal dead-zone for the time being. let and const are block scope and cant be accessed outside the block.
   var declaration is hoisted but not the initialization.
   var is alway hoisted and are always declared in global/function scope as the case may be.
   var a = 10;
   var a = 100;
   variables with same name cannot be initialize in same scope using let or const however var can.
8. block, scope, shadowing, illegal shawdowing, Arrow function scope - lexical scope works inside the block

9.  this - the value of this anytime is not where it is but infact how it is called.  
    if a 'new' keyword used, then this refers to object otherwise this refers to global & this concept is applied to both normal & arrow fn.
    
10. **Arrow function**
    Normal function are hoisted. 
    **a**. Arrow functions are always defined using let, const so they are not hoisted. Arrow functions defined using var takes the declaration but doesnot take initialization as seen below- 
 
    console.log(y()); // reference error . cannot access 'y' before initialization
    const y = () => { return 100 };

    console.log(x()); // undefined; TypeError: x is not a function
    var x = () => { return 100 };

    **b** Arrow function doesnot have its own binding
    **c** Arrow fn are callable but not constructable using new keyword.
    **d** Function expressions are best for object methods. Arrow functions are best for callbacks or methods like map, reduce, or forEach.
    **e** Arrow functions are simply incapable of binding a value of this different from the value of this in their scope. So the methods bind, call, and apply will have no effect on them.

11. Javascript creates closures of any variable you are using outside your calling function. Using closures, js is preserving variables that are expected to use inside function.As a closure property these variables are accessed inside the calling function where it is not defined. these variables live beyond their life span.

12. If your this is null or undefined, behind the scene; js sets this to global/window.
function myfunction() {
    console.log(this);  
}
myfunction();// this sets to window

13. call apply and bind
14. polyfill for bind