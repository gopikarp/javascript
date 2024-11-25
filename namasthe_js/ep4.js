/* function invocation and variable environments in 
 programming. It explains how to utilize functions 
 effectively while managing variables for optimal 
 performance */

 /*
 In JavaScript, the variable environment is a crucial concept that refers to the structure that holds variables and their values during the execution of code. Here’s a breakdown of how it works:
Execution Context: Every time a function is invoked, a new execution context is created. This context contains the variable environment, which includes all the local variables defined within that function.

Memory Allocation: When a function is called, memory is allocated for its variables. This memory is separate from other execution contexts, meaning that each function has its own unique variable environment.

Scope: Variables defined within a function are not accessible outside of it unless they are explicitly returned or defined in a broader scope (like global variables). This encapsulation helps prevent variable name conflicts.

Closure: Functions in JavaScript can form closures, which means they can remember the variable environment of their parent function even after that function has finished executing. This allows inner functions to access variables from their outer function's scope.

Global Environment: There is also a global variable environment that holds variables defined outside of any function. These variables can be accessed from anywhere in the code unless shadowed by local variables.

Undefined Variables: If a variable is referenced that hasn’t been defined in the current execution context or any parent contexts, JavaScript will return undefined.

Understanding the variable environment is essential for managing scope, closures, and memory in JavaScript, which ultimately affects how functions behave and interact with each other. */


var x=1
a()
b()
console.log(x);


function a(){
    var x=10
    console.log(x);
    
}
function b(){
    var x=100
    console.log(x);
    
}