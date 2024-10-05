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


// const read = require('prompt-sync')();
// const array1 = [], array2 = [], array3 = [];
// let limit = read("Enter the size of the array : ");
// console.log("Enter the elements of array1 ")
// for(let i = 0; i < limit; i++){
// array1[i] = []
// for(let j = 0; j < limit; j++) {
// array1[i][j] = read();
// }
// }
// console.log("Enter the elements of array2")
// for(let i = 0; i < limit; i++){
// array2[i] = []
// for(let j = 0; j < limit; j++) {
// array2[i][j] = read();
// }
// }
// for(let i = 0; i < limit; i++){
// array3[i] = []
// for(let j = 0; j < limit; j++) {
// array3[i][j] = parseFloat(array1[i][j]) +
// parseFloat(array2[i][j])
// }
// }
// console.log("Sum of the 2 arrays: ")
// console.log(array3)

// ---------------------------------//-------------------------------------
/*

15. Write a program to accept an array and display it on the console using functions
a. Program should contain 3 functions including main() function
main()
1. Declare an array
2. Call function getArray()
3. Call function displayArray()
getArray()
1. Get values to the array
displayArray()
1. Display the array values
*/

// const read = require('prompt-sync')();

// function mainFunction(){
//     let   array=[]
//     getArray();
//     displayArray()

//     function getArray(){

// let limit = read("Enter the array limit :")

// console.log("Enter the values of array");

// for(let i = 0; i < limit; i++){
//   array[i] = read()
// }

//     }
//     function displayArray(){
//         console.log("You have entered : " + array)
//     }



// }

// mainFunction()

// ---------------------------------//-------------------------------------

// 16. Write a program to check whether a given number is prime or not
// a. Program should accept an input from the user and display whether the
// number is prime or not
// Eg: Output: Enter a number
// Input: 7
// Output: Entered number is a Prime number

// const read = require('prompt-sync')();
// let isPrime = 0;
// let number = read('Enter the number')

// for(let i = 2; i <number; i++){
//     if(number%i ==0){
// isPrime = 1;
// break;
//     }
// }
//   if(isPrime==0){
//     console.log('number is a Prime number');

//   }else{
//     console.log('Entered number is not a Prime number');
//   }

// ---------------------------------//-------------------------------------

// 21. Write a program to multiply the adjacent values of an array and store it in an
// another array
// a. Program should accept an array
// b. Multiply the adjacent values
// c. Store the result into another array
// Eg:
// Enter the array limit
// 5
// Enter the values of array
// 1 2 3 4 5
// Output
// 2 6 12 20

// const read = require('prompt-sync')();

// let limit = read('Enter the array limit')
// console.log("Enter the values of array")
//  let array = [];
//  let array1 =[]
//  for (let i = 0; i < limit; i++){
//     array[i] = read();
//  }

//  for(i = 0 ; i<limit - 1; i++){
//  array1[i] = array[i] * array[i+1];
//  }
//  console.log("Square of each element: ", array1);

// 17. Write a menu driven program to do the basic mathematical operations such as
// addition, subtraction, multiplication and division (hint: use if else ladder or switch)
// a. Program should have 4 functions named addition(), subtraction(),
// multiplication() and division()
// b. Should create a class object and call the appropriate function as user prefers
// in the main function

// const read = require('prompt-sync')();

// let val1 = parseFloat(read('Enter first value: ')); 
// let val2 = parseFloat(read('Enter second value: ')); 



// console.log('Choose an operation: \n 1. Addition \n 2. Subtraction \n 3. Multiplication \n 4. Division');
// let choice = parseInt(read('Enter the choice: '));  // Convert the choice to an integer

// let result;
// switch(choice){

//     case 1:
//     result = val1+val2
//     // console.log(choice);
    
//     break;
//     case 2:
//     result = val1-val2
//     break;
//     case 3:
//     result = val1*val2
//     break;
//     case 4:
//     result = val1/val2
//     break;
//     default:
//         console.log("invalid");
//         result = null
// }
// console.log("Result is", result);


// similar qustion answer-------------------------

// const read = require('prompt-sync')();
// let val1 = parseFloat(read("enter the 1st number"))
// let val2 = parseFloat(read("enter the 2nd number"))
// console.log('Choose an operation: \n 1. Addition \n 2. Subtraction \n 3. Multiplication \n 4. Division');
// let choice = parseInt(read("enter the choice: "))

//  class Calculator{
//     addition(val1,val2){
//        return val1 + val2
//     }
// subtraction(val1,val2){
//     return val1 - val2
//  }
// multiplication(val1,val2){
//     return val1 * val2
//  }
// division(val1,val2){
//     return val1 / val2
//  }
//  }

//  const calc = new Calculator();
//  switch(choice){
   
//         case 1 :
//             console.log("Result:", calc.addition(val1, val2));
//             break;
//         case 2 :
//             console.log("results:",calc.subtraction(val1,val2));
//              break;
//         case 3 :
//         console.log("results:",  calc.multiplication(val1,val2))
//              break;
//         case 4 :
//         console.log("results:",  calc.division(val1,val2)) 
//             break;

//         default:
//         console.log("invalide");
                    
//  }  

// ---------------------------------//-------------------------------------

/*
 18. Grades are computed using a weighted average. Suppose that the written test
counts 70%, lab exams 20% and assignments 10%.
If Arun has a score of
Written test = 81
Lab exams = 68
Assignments = 92
Arun’s overall grade = (81x70)/100 + (68x20)/100 + (92x10)/100 = 79.5
Write a program to find the grade of a student during his academic year.
a. Program should accept the scores for written test, lab exams and
assignments
b. Output the grade of a student (using weighted average)
Eg:
Enter the marks scored by the students
Written test = 55
Lab exams = 73
Assignments = 87
Grade of the student is 61.8
*/

// const read = require('prompt-sync')();
// console.log("Enter the marks scored by the students");

// // let mark = read("Enter the marks scored by the students")
// let test = read("written test")
// let labe = read("Lab exams marks ")
// let assignments = read("Assignment marks ")

// let grade = (test*70)/100 + (labe*20)/100 + (assignments*10)/100
// console.log("Grade of the student is ",grade)

// ---------------------------------//-------------------------------------

/*
19. Income tax is calculated as per the following table
Annual Income Tax percentage
Up to 2.5 Lakhs No Tax
Above 2.5 Lakhs to 5
Lakhs
5%
Above 5 Lakhs to 10
Lakhs
20%
Above 10 Lakhs to 50
Lakhs
30%
Write a program to find out the income tax amount of a person.
a. Program should accept annual income of a person
Output the amount of tax he has to pay
Eg 1:
Enter the annual income
495000
Income tax amount = 24750.00
Eg 2:
Enter the annual income
500000
Income tax amount = 25000.00

*/
// const read = require('prompt-sync')();
// let annualIncom = parseInt(read("Enter the annual income "))
// let taxAmount = 0;
// if(annualIncom<250000){
//     console.log("No Tax");
// }else if(annualIncom>=2,5000 && annualIncom<= 500000){
//     taxAmount = (annualIncom*5)/100
// }else if(annualIncom>500000 && annualIncom<= 1000000){
//     taxAmount = (annualIncom*20)/100
// }else if(annualIncom>1000000 && annualIncom<= 5000000){
//     taxAmount = (annualIncom*30)/100
// }else {
//     console.log("invalid");
// }
// console.log("Income tax amount = ",taxAmount);

// ---------------------------------//-------------------------------------

/*
20. Write a program to print the following pattern using for loop
1
2 3
4 5 6
7 8 9 10
*/
// let limit = 5
// let string = ""
// let val = 1

// for(i=1;i<=limit;i++){
//     for(j=1;j<=i;j++){
//     // string = string + i
//     string = string + val
//     val++
//     }
//     string += "\n";
// }
// console.log(string)

// ---------------------------------//-------------------------------------

/*

* 
* * 
* * * 
* * * * 
* * * * * 

 */
// let limit = 5
// let string = ""
// for(i=0;i<=limit;i++){
//     for(j=0;j<i;j++){
     
//         string = string + "* "
//     }
//     string += "\n";

// }
// console.log(string)

// ---------------------------------//-------------------------------------

/*
21. Write a program to multiply the adjacent values of an array and store it in an
another array
a. Program should accept an array
b. Multiply the adjacent values
c. Store the result into another array
Eg:
Enter the array limit
5
Enter the values of array
1 2 3 4 5
Output
2 6 12 20
*/

// const read = require('prompt-sync')()
// let limit = read("Enter the array limit ")
// let array1 = []
// let array2 = []
// for(let i=1 ; i<=limit ; i++){
//     array1[i]=read()
// }

// for(let i=1 ; i<limit ; i++){

//     array2[i]= array1[i]*array1[i+1]

//     console.log(array2[i]);
// }

// ---------------------------------//-------------------------------------

/*
22. Write a program to add the values of two 2D arrays
a. Program should contains 3 functions including the main function
main()
1. Call function getArray()
2. Call function addArray()
3. Call function displayArray()
getArray()
1. Get values to the array
getArray()
1. Add array 1 and array 2
displayArray()
1. Display the array values
Eg:
Enter the size of array
2
Enter the values of array 1
1 2
3 4
Enter the values of array 2
5 6
7 8
Output:
Sum of array 1 and array 2:
6 8
10 12

*/
// const read = require('prompt-sync')();
// let array1 = []
// let array2 = []
// let array3 = []
// let limit = parseInt(read('Enter the size of array '))
// function main(){
//      getArray()
//      addArray()
//      displayArray()


// function  getArray(){

// console.log("Enter the values of array 1");
//     for(i= 0; i<limit ; i++){
//       array1[i]=[]
//       for(j= 0; j<limit ; j++){
//      array1[i] [j]= read()
//       }

// }
// console.log("Enter the values of array 2");
//     for(i= 0; i<limit ; i++){
//       array2[i]=[]
//       for(j= 0; j<limit ; j++){
//      array2[i] [j]= read()
//       }
// }
// }
// function  addArray(){
//     for(i= 0; i<limit ; i++){
//         array3[i] = []
//         for(j= 0; j<limit ; j++){
//             array3[i][j] = parseInt(array1[i][j]) + parseInt(array2[i][j]);
//         }   
//     }
//     }

//     function displayArray(){
//         console.log(array3);
        
//     }
// }
// main()

// ---------------------------------//-------------------------------------

/*
24. Write a menu driven program to calculate the area of a given object.
a. Program should contain two classes
i. Class 1: MyClass
ii. Class 2: Area
b. Class MyClass should inherit class Area and should contain the following
functions
i. main()
ii. circle()
iii. square()
iv. rectangle()
v. triangle()
c. Class Area should contain the following functions to calculate the area of
different objects
i. circle()
ii. square()
iii. rectangle()
iv. triangle()
Class MyClass extends Area{
public static void main(string args[]){
}
circle() {
}
square() {
}
rectangle() {
}
triangle() {
}
}
Class Area{
circle(){
}
square(){
}
rectangle() {
}
triangle() {
}
}
Eg 1:
Enter your choice
1. Circle
2. Square
3. Rectangle
4. Triangle
2
Enter the length
2
Output
Area of the square is: 4
Eg 2:
Enter your choice
1. Circle
2. Square
3. Rectangle
4. Triangle
1
Enter the radius
3
Output
Area of the circle is: 28.26
*/

// class MyClass extends Area {
//     circle(){}
//     square(){}
//     rectangle(){}
//     triangle(){}
// }
// class Area{
//     circle(){}
//     square(){}
//     rectangle(){}
//     triangle(){}
// }


// ---------------------------------//-------------------------------------


