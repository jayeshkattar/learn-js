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
   var is alway hoisted and are always declared in global/function scope as the case may be.
   var a = 10;
   var a = 100;
   variables with same name cannot be initialize in same scope using let or const however var can.
8. block, scope, shadowing, illegal shawdowing, Arrow function scope - lexical scope works inside the block
