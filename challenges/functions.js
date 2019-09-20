// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
let consume = (a,b, cb) => cb(a,b);



/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
let add = (num1,num2) => num1+num2;
;
let multiply = (num1,num2) => num1*num2;

let greeting = (firstName,lastName) => `Hello ${firstName} ${lastName}, nice to meet you!`;


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.
//  Because of closure, a function can look outside of it's own context if it can't find the variable stored in itself, it will look for the variable in the parent function and since it's there it will use it, if it wasnt there, it would keep looking until reaching the global context.
// This happens because everytime a function is called, a new execution context is created, and this new execution context can look beneath all the other execution contexts that are beneath it, so if you had 15 functions nested, the last function have access to all the variables of the other 14 functions and the global execution context itself(It will grab the value of the variable that is closer to itself, so if in the global scope let a = 1 , but in function 14 let a = 2, if function 15 is looking for variable a, it will take the value from function 14 which is 2, but if there was no let a = 2 on function 14, then it would take it ffrom the global scope and then if you console.log a in function 15 it would be 1)
// Explanation: 


// const external = "I'm outside the function";

// function myFunction() {
//   console.log(external);
//   const internal = "Hello! I'm inside myFunction!";

//   function nestedFunction() {
//     console.log(internal);
//   };
//   nestedFunction();
// }
// myFunction();
