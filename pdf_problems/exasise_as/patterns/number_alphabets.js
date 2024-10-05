// We will also use String.fromCharCode() 
// to convert the number to a letter.

// for(let i = 65; i <= 90; i++){
//     console.log(String.fromCharCode(i));
//   }


// problem - 
////////------------------------
  

// problem - 1 (alpha)
/*
A
AB
ABC
ABCD
*/
// let n =5
// str =""

// for(let i=1;i<n;i++){
//   for(let j=0;j<i;j++){
// str += String.fromCharCode(j + 65)
//   }
//   str += "\n"

// }
// console.log(str);

////////------------------------

  
/*
problem - 1 (number pattern)
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
*/
// let limit = 5
// let str = ""
// for(i=1; i<=limit;i++){
//   for(j=1;j<=i;j++){
//     str += j + " "
//   }
//   str += "\n"
// }
// console.log(str)

// ---------------------------------//-------------------------------------


/*
problem - 2 (number pattern)
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/
// let limit = 5
// let string = ""
// for(i=0;i<= limit;i++){
//     for(j=0;j<i;j++){
//         string += i + " "
//     }
//     string += "\n"
// }
// console.log(string)

// ---------------------------------//-------------------------------------

/*
problem - 3 (number pattern)
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
1 2 3 4 
1 2 3 4
1 2 3 4
1 2 3 4
*/

// let n = 4
// let string = ""
 
// for(i=1;i<=n;i++){
//     for(j=1;j<=n;j++){
//   string += j + " "
//     }
//     string += "\n"
// }
// console.log(string);

// ---------------------------------//-------------------------------------

/*
1 1 1 
2 2 2
3 3 3
*/
// let n = 3
// let string = ""

// for(i=1;i<=n;i++){
//     for(j=1;j<=n;j++){
//     string += i + " " 
//     }
//     string += "\n"
// }
// console.log(string);

// ---------------------------------//-------------------------------------
/*
ABCD
ABCD
ABCD
ABCD
*/
// let n = 4
// let string = ""
 
// for(i=1;i<=n;i++){
//     for(j=0;j<n;j++){
//   string += String.fromCharCode(j + 65)
//     }
//     string += "\n"
// }
// console.log(string);

// ---------------------------------//-------------------------------------

/*
4 3 2 1 
4 3 2 1
4 3 2 1
4 3 2 1
*/
// let n = 4
// let string = ""
 
// for(i=1;i<=n;i++){
//     for(j=n;j>=1;j--){
//   string += j + " "
//     }
//     string += "\n"
// }
// console.log(string);

// ---------------------------------//-------------------------------------
/*
1 
1 2
1 2 3
1 2 3 4
 */
// let n = 4
// let string = ""
 
// for(i=1;i<=n;i++){
//     for(j=1;j<=i;j++){
//   string += j + " "
//     }
//     string += "\n"
// }
// console.log(string);

// ---------------------------------//-------------------------------------


/*
1 
2 2
3 3 3
4 4 4 4
 */
// let n = 4
// let string = ""
 
// for(i=1;i<=n;i++){
//     for(j=1;j<=i;j++){
//   string += i + " "
//     }
//     string += "\n"
// }
// console.log(string);

// ---------------------------------//-------------------------------------

/*
A
BB
CCC
DDDD
EEEEE
 */
// let n =5
// string = ""

// for(i=0;i<n;i++){
//     for(j=0;j<=i;j++){
//         string += String.fromCharCode(i+65)
//     }
//     string += "\n"
// }
// console.log(string);

// ---------------------------------//-------------------------------------
/*
5
54
543
5432
*/
// let n =5
// string = ""

// for(i=n;i>1;i--){
//     for(j=n;j>=i;j--){
//          string += j
//     }
//     string += "\n"
// }
// console.log(string);

// ---------------------------------//-------------------------------------

/*

        * 
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *

 */
// let n = 5
// string = ""

// for(i=0;i<n;i++){
//     for(s=0;s<n-i-1;s++){
//         string += "  "
//    }
//     for(j=0;j<i*2+1;j++){
//          string += "* "
//     }
//     string += "\n"
// }
// console.log(string);
// ---------------------------------//-------------------------------------

