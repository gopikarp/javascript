const read = require("prompt-sync")();
let value = parseInt(read("Enter the number of elements in the array: "), 10); // Parse input to an integer
let array = [];

for (let i = 0; i < value; i++) {
  array[i] = read(`Enter value for array[${i}]: `); // Backticks allow `${i}` to be replaced with actual index
}

console.log("Array:", array); // Print the entire array

