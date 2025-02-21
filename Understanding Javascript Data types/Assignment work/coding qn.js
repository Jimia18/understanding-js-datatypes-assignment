// Write a JavaScript function that takes a parameter and returns its data type using the typeof operator.

 function number(value) {
    return typeof value;
}

console.log(number(42)); 
// Example Output: "number"
function number(value) {
    
}

console.log(typeof(42)); // Output: "number"
console.log(typeof("Hello")); // Output: "string"
console.log(typeof(true)); // Output: "boolean"
console.log(typeof({})); // Output: "object"
console.log(typeof([])); // Output: "object"
console.log(typeof(undefined)); // Output: "undefined"
console.log(typeof(function() {})); // Output: "function"


//Write a program that demonstrates the difference between null, undefined, and an empty string.
let nullValue = null;
let undefinedValue;
let emptyString = "";

console.log("nullValue:", nullValue, "- Type:", typeof nullValue); // Output: null - Type: object
console.log("undefinedValue:", undefinedValue, "- Type:", typeof undefinedValue); // Output: undefined - Type: undefined
console.log("emptyString:", emptyString, "- Type:", typeof emptyString); // Output: "" - Type: string

// (2 Marks) Declare a variable using const and try to reassign it. What happens? Explain your answer in a comment.
const person = { name: "Alice" };
person.name = "jimia"; // This is allowed

console.log(person.name); // Output: jimia
//explanation
//The const keyword is used to declare variables that should not be reassigned after their initial assignment.
//While the value itself cannot be reassigned, if the const variable holds an object or array,
// the properties or elements within can still be modified.

// (2 Marks) Given the following array, update the third element to "Banana" and log the updated array:

// let fruits = ["Apple", "Mango", "Orange"];
let fruits = ["Apple", "Mango", "Orange"];

fruits[2] = "Banana"; // Updating the third element (index 2)because arrays in javascript are indexed 

console.log(fruits); // Output: ["Apple", "Mango", "Banana"]



// (2 Marks) Write a function that checks if a given variable is an object and not null.

    function isObject(variable) {
        return typeof variable === 'object' && variable !== null;
      }
      

 console.log(isObject({ name: "John" })); // Output: true
 console.log(isObject(null)); // Output: false

// Bonus Question (Optional - 5 Marks)
      //Write a JavaScript function that takes two different data types and checks
      //  if they are strictly equal (===). If they are not, explain why in a return message.
function strictEqualityCheck(a, b) {
            if (a === b) {
          return "The values are strictly equal.";
        } else {
          return `The values are not strictly equal. 
          - Type of val1: ${typeof a} 
          - Type of val2: ${typeof b} 
          - Values: ${a} !== ${b}`;
        }
      }

console.log(strictEqualityCheck(5, "5")); // Output: "5 and '5' are not strictly equal because one is a number and the other is a string."



