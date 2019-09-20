// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
let consume = function(a,b, cb){
  return cb(a,b);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
let add = function(num1,num2){
  return num1+num2;
};
let multiply = function(num1,num2){
  return num1*num2;
}
let greeting = function(firstName,lastName){
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.
//  Because of the execution stack and closure, when you call myFunction a new execution context is created on top of the global and will store the new variables in this new stack, then, when nestedFunction is called now a new execution context is created on top of the myFunction scope and when you console.log the variable it will look inside of this function but if can't find it it will look beneath in the myFunction stack (It's there so now myFunction lets nestedFunction borrow it); if it wasn't there it would go all the way back to the global scope and check there no matter how nested it is.
// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
