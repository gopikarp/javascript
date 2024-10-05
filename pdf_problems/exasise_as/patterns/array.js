//array     /* */
  /* 
const read = require('prompt-sync')()

let limit = read("Enter the array limit: ")
 Array=[]

 for(i= 1; i<=limit ; i++){
    Array[i]= read()
  
  
 }
 for(i= 1; i<=limit ; i++){
    console.log(Array[i]);
 }

 */

//  array insertation

  /* 
const read = require('prompt-sync')()

let limit = read("Enter the array limit: ")
 array=[]

 for(i= 1; i<=limit ; i++){
    array[i]= read()
    }
    let position = read("Enter the array position: ")
    let value = read("Enter the array value: ")
    
 for(i= limit-1; i>=position-1 ; i--){
   array[i+1] =  array[i]


 }
 array[position-1]= value

 for(i= 0; i<=limit ; i++){
    console.log(array[i]);
 }
    */

 //array deleatation

 /* 
 const read = require('prompt-sync')();

let n = read("Enter the array limit: ")
 array=[]

 for(i= 0; i<n ; i++){
    array[i]= read()
    }
    let position = read("Enter the array position: ")


   if(position>n+1){
console.log("wrong number");

   }else{
for(i=position-1;i<n-1;i++){
array[i] =  array[i+1]
}

for(i= 0; i<n-1 ; i++){
   console.log(array[i]);
}
}

*/

//print in reverse order
/*
const read = require('prompt-sync')();
array = []
let n = read("Enter the array limit: ");
console.log("enter array");

for (let i = 0; i < n; i++) {
   array[i] = read();
}
console.log("entered reverse array:");
for (let i = n - 1; i >= 0; i--) {
   console.log(array[i]);
}
 */

//reversing the element in an array /* */
//reversing only first half of the element in an array /* */

const read = require('prompt-sync')();
array = []
let n = read("Enter the array limit: ");
console.log("enter array");

for (let i = 0; i < n; i++) {
   array[i] = read();
}
console.log("entered reverse array:");
for (let i = n - 1; i >= 0; i--) {
   console.log(array[i]);
}