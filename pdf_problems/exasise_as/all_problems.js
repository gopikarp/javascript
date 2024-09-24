// 1. Accept a char input from the user and display it on the console.
// const read = require("prompt-sync")();
// var inp = read("enter your name ")
// console.log("Hello! "+ inp);

// 2.Accept two inputs from the user and output their sum.

// const read = require("prompt-sync")();
// console.log("enter 2 nums");

// var inp = read("give the value: ")
// var inp2 = read()

// result = parseFloat(inp) + parseFloat(inp2)

// console.log(result)


//3. Write a program to find the simple interest 
// const read = require("prompt-sync")();
// var p = read("Principal amount ")
// var r = read("Interest rate ")
// var  y = read(" Number of years ")

// result = parseInt(p)*parseFloat(r)*parseFloat(y)/100

// console.log("answer is : ",result);



// 4. Write a program to check whether a student has passed or failed in a
//subject after he or she enters their mark (pass mark for a subject is 50 out of 100).

// const read = require("prompt-sync")();
// var mark = read("enter your mark ")
// var marks = parseFloat(mark)
// if(marks >0 && marks<100){
//     if(mark<50){
//         console.log("failed")
//     }else{
//         console.log("pass")
//     }
// }else{
//     console.log("invalied")
// }


// 5. Write a program to show the grade obtained by a student after he/she enters 
// their total mark percentage.

// const read = require("prompt-sync")()
// var inpVAlue = read("enter your marks: ")
// var marks = parseFloat(inpVAlue)
// if(marks>0 && marks<=100){
//     if(marks<50){
//         console.log("Failed")
//     }else if(marks>=50 && marks<=59){
//         console.log("grade : E")
//     }else if(marks>=60 && marks<=69){
//         console.log("grade : D")
//     }else if(marks>=70 && marks<=79){
//         console.log("grade : C")
//     }else if(marks>=80 && marks<=89){
//         console.log("grade : B")
//     }else if(marks>=90 ){
//         console.log("grade : A")
//     }
// }else{
//     console.log("invalied")
// }

// 6. Using the ‘switch case’ write a program to accept an input number from the 
// user and output the day as follows

//  const read = require("prompt-sync")()
//  var inp = read("Enter the number from 1 - 7: ")
// var num = parseInt(inp)
// switch(num){
//     case 1:
//         console.log("sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//         case 1:
//             console.log("Tuesday");
//             break;
//     case 3:
//             console.log("Wednesday");
//             break;   
//      case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 5:
//             console.log("Saturday");
//             break;        
//         default :
//         console.log("invalied")
// }

//7. Write a program to print the multiplication table of given numbers.

// const read = require('prompt-sync')()
// var inp = read("Enter a number: ")
// var num = parseInt(inp)
// console.log("multiplication table of",num,":");

//  for(i=1;i<=10;i++){
//     console.log(i +"x"+num+"="+i*num);
    
//  }


// 8. Write a program to find the sum of all the odd numbers for a given limit
// a. Program should accept an input as limit from the user and display the sum
// of all the odd numbers within that limit
// For example if the input limit is 10 then the result is 1+3+5+7+9 = 25

// const read = require('prompt-sync')()
// var inp = read("Enter a number: ")
// var num = parseInt(inp)
// var sum=0
//  for( i=1;i<num;i++){
//    if(i%2 != 0){
//    sum=sum+i
//    }
// }
// console.log(sum)

////////////Even Numbers
// const read = require("prompt-sync")()
// var inp = read("enter num ")
// var num = parseInt(inp)
// sum =0
// for(i=1;i<num;i++){
//   if(i%2 ==0){
//     sum = sum+i
//   }
// }
// console.log(sum)

// 9. Write a program to print the following pattern (hint: use nested loop)
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
//ans: on patterns file


/*
10. Write a program to interchange the values of two arrays.
a. Program should accept an array from the user, swap the values of two arrays
and display it on the console
Eg: Output: Enter the size of arrays
Input: 5
Output: Enter the values of Array 1
Input: 10, 20, 30, 40, 50
Output: Enter the values of Array 2
Input: 15, 25, 35, 45, 55
Output: Arrays after swapping:
Array1: 15, 25, 35, 45, 55
Array2: 10, 20, 30, 40, 50

ans:  */
// const read = require("prompt-sync")()
// let array1 = [20], array2 = [20]
//  let limit = read("Enter the size of arrays: ")

//  console.log("Enter the values of Array 1: ");
 
//  for(i=0;i<limit;i++){
//     array1[i]=read()
//  }
//  console.log("Enter the values of Array 2: ");
//  for(i=0;i<limit;i++){
//     array2[i]=read()
//  }

//  for(i=0;i<limit;i++){
//  temp = array1[i]
//  array1[i] = array2[i]
//  array2[i] = temp
//  }
//  console.log("Arrays after swapping:\nArray1:"+array1+ "\nArray2:"+ array2);

//---------------------------???????--------------------------------

// sample :

// const read = require("prompt-sync")()
// let array= [20]

// let EnterVal = read("Enter the values of Array 1: ")
// for(i=0;i<EnterVal;i++){
//     array[i] = read();
// }
// for(i=0; i<EnterVal;i++){
//     console.log("enterd value " + i + ":"+array[i]);
    
// }
//---------------------------------//-------------------------------------


/*
11. Write a program to find the number of even numbers in an array
a. Program should accept an array and display the number of even numbers
contained in that array
Eg: Output: Enter the size of an array
Input: 5
Output: Enter the values of array
Input: 11, 20, 34, 50, 33
Output: Number of even numbers in the given array is 3

*/

// const read = require("prompt-sync")()

// let limit = read("Enter the size of an array: ")
// let array=[10]
// console.log("Enter the values of array \n");
// for(i=0;i<limit;i++){
//     array[i] = read()
// }
// let count = 0

// for(i=0;i<=limit;i++){
//   if(array[i] % 2 == 0){
// count ++
//   }

// }
// console.log(" Number of even numbers in the given array is "+ count);
//---------------------------------//-------------------------------------


/*
12. Write a program to sort an array in descending order
a. Program should accept and array, sort the array values in descending order
and display it
Eg: Output: Enter the size of an array
Input: 5
Output: Enter the values of array
Input: 20, 10, 50, 30, 40
Output: Sorted array:
50, 40, 30, 20, 10

 */
// const read = require("prompt-sync")()
// let limit = read("Enter the size of an array ")

// let array = [10]
// for(i=0;i<limit;i++){
//     array[i] = parseInt(read())
// }


// for(i=0;i<limit - 1;i++){
//     for(j=i+1;j<limit;j++){
//         if(array[i]< array[j]){
//             temp = array[i]
//             array[i]= array[j]
//             array[j] = temp;

//         }
//     }
  
// }
// console.log("Sorted array: ");
// for(i=0;i<limit;i++){
//     console.log(array[i]);
    
// }
//---------------------------------//-------------------------------------



/*13. Write a program to identify whether a string is a palindrome or not
a. A string is a palindrome if it reads the same backward or forward eg:
MALAYALAM
Program should accept a string and display whether the string is a
palindrome or not
Eg: Output: Enter a string
Input: MALAYALAM
Output: Entered string is a palindrome
Eg 2: Output: Enter a string
Input: HELLO
Output: Entered string is not a palindrome
 */

// const read = require("prompt-sync")()
// let inp = read("Enter a string ")
// inp = inp.toLowerCase();
// let splitStr = inp.split("")
// let reversStr = splitStr.reverse()
// let joinStr = reversStr.join("")

// if(inp == joinStr){
//     console.log(" Entered string is a palindrome");
    
// }else{
//     console.log("Entered string is not a palindrome");
    
// }
// ---------------------------------//-------------------------------------

/*

14. Write a program to add to two dimensional arrays
a. Program should accept two 2D arrays and display its sum
Eg: Output: Enter the size of arrays
Input: 3
Output: Enter the values of array 1
Input:
1 2 3
4 5 6
7 8 9
Output: Enter the values of array 2
Input:
10 20 30
40 50 60
70 80 90
Output: Sum of 2 arrays is:
11 22 33
44 55 66
77 88 99
*/


const read = require('prompt-sync')();
const array1 = [], array2 = [], array3 = [];
let limit = read("Enter the size of the array : ");
console.log("Enter the elements of array1 ")
for(let i = 0; i < limit; i++){
array1[i] = []
for(let j = 0; j < limit; j++) {
array1[i][j] = read();
}
}
console.log("Enter the elements of array2")
for(let i = 0; i < limit; i++){
array2[i] = []
for(let j = 0; j < limit; j++) {
array2[i][j] = read();
}
}
for(let i = 0; i < limit; i++){
array3[i] = []
for(let j = 0; j < limit; j++) {
array3[i][j] = parseFloat(array1[i][j]) +
parseFloat(array2[i][j])
}
}
console.log("Sum of the 2 arrays: ")
console.log(array3)


