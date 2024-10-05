// 1. Upper left triangle 1
// let n = 5;
// for(let i = 0;i<=n;i++){

//     console.log("* ".repeat(i))
// }
// ans:
// *
// * *
// * * *
// * * * *
// * * * * *
//-------------------------------------

// Upper right triangle 2
// let n = 5;
// for(let i = n;i>=0;i--){
// str = "* "
//     console.log(str.repeat(i))
// }
// ans:
// * * * * * 
// * * * *
// * * *
// * *
// *
//------------------------------------
// let n = 5;
// for (let i = 0; i <= n; i++) {
// console.log("* ".repeat(n));
// }
// ans:
// * * * * * 
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
//-------------------------------------
// let n = 5;
// for (let i = n; i >= 1; i--) {
//     let str = "* ";
//     let space  = '  ';
//     console.log(space.repeat(n-i)+str.repeat(i));
// }
// ans:
// * * * * * 
//   * * * *
//     * * *
//       * *
//         *
//-------------------------------------%%------------






//  Mitham
/*
* * * * * 
* * * *
* * *
* *
*
do the problem
*/

// let limit =5
// let strint = ""

// for(i=limit; i>0;i--){
//     for(j=0; j<i;j++){
// strint += "* "
//     }
//     strint += "\n"
// }
// console.log(strint);

 //-------------------------------------
/*  
* * * * * 
* * * * *
* * * * *
* * * * *
* * * * *
*/


// let limit = 5;
// let string = "";
// for(let i = 0; i < limit; i++) {
//     for(let j = 0; j < limit; j++) {
//         string += "* ";  // Add a star followed by a space
//     }
//     string += "\n";  // Move to the next line after each row
// }
// console.log(string);

//-------------------------------------%%------------

// * * * * * 
//   * * * *
//     * * *
//       * *
//         *

// let limit = 5
// let str = ""
// for(i=1;i<=limit;i++){
//     for(s=0;s<=i-1;s++){
//         str += " "
//     }
//     for(j=limit;j>=i;j--){
//          str += "*"
//     }
//      str += "\n"
// }
// console.log(str);

//-------------------------------------%%------------

//-------------------------------------%%------------

/* 
     *
    **
   ***
  ****
 *****

 */

// let string = "";
// for(i=1;i<=5;i++){
//     for(s=5;s>=i;s--){
//         string += " "
//     }
//         for(j=1;j<=i;j++){
//             string += "*"
     
//   }
//     string += "\n";
// }
// console.log(string); 

//-------------------------------------%%------------


/*
* * * * * 
 * * * *
  * * *
   * *
    *
 */

// let n = 5
// let string = ""

// for(i=1;i<=n;i++){
//     for(s=1;s<i;s++){
//              string += " "
//     }
//         for(j=n;j>=i;j--){
//           string += "* "
//     }
//           string += "\n"
// }
// console.log(string); 

//-------------------------------------%%------------

/*
    *
   ***
  *****
 *******
*********
*/
// let n = 5 
// let string = ""
// for(i=1;i<=n;i++){
//    for(s = n ;s>i;s--){
// string += " "
//    }
//    for(j=1;j<=i ;j++){
//       string += "* "
//    }
//    string += "\n"
// } 
// console.log(string); 


//-------------------------------------%%------------

/*
    * 
   * *
  * * *
 * * * *
* * * * *
 * * * *
  * * *
   * *
    *
*/

// let n = 5
// let string = ""

// for(i=1;i<=n;i++){
//    for(s=n;s>i;s--){
//       string += " "
//    }
// for(j=1;j<=i;j++){
//    string += "* "
// }
// string += "\n"
// }

// for(i=1;i<=n;i++){
//    for(s=0;s<i;s++){
//       string += " "
//    }
// for(j=n-1;j>=i;j--){
//    string += "* "
// }
// string += "\n"
// }
// console.log(string); 

//-------------------------------------%%------------
/*
  *  
  *
*****
  *
  *
*/
// let n = 5
// let string = ""
// // let half = (n/2)
// for(i=1;i<=n;i++){

//    for(j=1;j<=n;j++){
//    // if(i==half || j == half){
//       if(i==3 || j == 3){
//       string += "*"
//    }else{
//       string += " "
//    }

//  }
//  string += "\n"
// }
// console.log(string);

// ---------------------------------//-------------------------------------

/*
* * * * * 
*       *
*       *
*       *
* * * * *
*/

// let n = 5
// let string = ""

// for(i=1;i<=n;i++){
//    for(j=1;j<=n;j++){
//       if((i==1)||(i==n) || (j==1)||(j==n) ){
//      string += "* "
//       }else{
//             string += "  "
//       }

//    }
   
//             string += "\n"
// }

// console.log(string);

// ---------------------------------//-------------------------------------

/*

*
**
***
****
*****
****
***
**
*

*/

// let n = 5
// let string = ""

// for(i= 1; i<n ; i++){
//    for(j=1 ; j<=i ; j++){
//        string += "*"
//    }
//     string += "\n"
// }

// for(i= 1; i<=n ; i++){
//    for(j=n ; j>=i ; j--){
//        string += "*"
//    }
//     string += "\n"
// }
// console.log(string);

// ---------------------------------//-------------------------------------

/*
    *
   **
  ***
 ****
*****
 ****
  ***
   **
    *
*/
// let n = 5
// let string = ""
// for(i= 1; i<n ; i++){
//    for(s= n; s>=i ; s--){
//       string += " "
   
//    }
//    for(j= 1; j<=i ; j++){
//        string += "*"
//    }
//     string += "\n"
// }

// for(i=1 ; i<=n ; i++){
//    for(s=1 ; s<=i ; s++){
//       string += " "
   
//    }
//    for(j=n ; j>=i ; j--){
//        string += "*"
//    }
//     string += "\n"
// }
// console.log(string);

// ---------------------------------//-------------------------------------

/*
 * * * * * 
  * * * *
   * * *
    * *
     *
    * *
   * * *
  * * * *
 * * * * *
*/
// let n = 5
// let string = ""

// for(i=1 ; i<n ; i++){
//    for(s=1 ; s<=i ; s++){
//       string += " "
   
//    }
//    for(j=n ; j>=i ; j--){
//        string += "* "
//    }
//     string += "\n"
// }
// for(i=1 ; i<=n ; i++){
//    for(s=n ; s>=i ; s--){
//       string += " "

//    }
//    for(j=1 ; j<=i ; j++){
//        string += "* "
//    }
//     string += "\n"
// }
// console.log(string);

// ---------------------------------//-------------------------------------
/*

*        *
**      **
***    ***
****  ****
**********
*/


// let n = 5
// let string = ""

// for(i= 1; i<=n ; i++){
//    for(j=1 ; j<=i ; j++){
//        string += "*"
//    }
//    for(s=n ; s>i ; s--){
//       string += " "
//    }
//    for(s=n ; s>i ; s--){
//       string += " "
//    }
//    for(j=1 ; j<=i ; j++){
//       string += "*"
//   }
//     string += "\n"
// }
// console.log(string);

// ---------------------------------//-------------------------------------

/*
********
***  ***
**    **
*      *

*/
// let n = 4
// let string = ""

// for(i= 1; i<=n ; i++){
//    for(j=n ; j>=i ; j--){
//        string += "*"
//    }

//    for(s= 1; s<i ; s++){
//     string += " "
//  }   
//  for(s= 1; s<i ; s++){
//   string += " "
// }
//  for(j=n ; j>=i ; j--){
//      string += "*"
//  }
//     string += "\n"

// }

// for(i= 1; i<=n ; i++){

//    string += "\n"

//  }
// console.log(string)

// ---------------------------------//-------------------------------------
/*

*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *

*/

// let n = 5
// let string = ""

// for(i= 1; i<n ; i++){
//    for(j=1 ; j<=i ; j++){
//        string += "*"
//    }
//    for(s=n ; s>i ; s--){
//       string += " "
//    }
//    for(s=n ; s>i ; s--){
//       string += " "
//    }
//    for(j=1 ; j<=i ; j++){
//       string += "*"
//   }
//     string += "\n"
// }

// ///////////
// for(i= 1; i<=n ; i++){
//    for(j=n ; j>=i ; j--){
//        string += "*"
//    }

//    for(s= 1; s<i ; s++){
//     string += " "
//  }   
//  for(s= 1; s<i ; s++){
//   string += " "
// }
//  for(j=n ; j>=i ; j--){
//      string += "*"
//  }
//     string += "\n"

// }

// for(i= 1; i<=n ; i++){

//    string += "\n"

//  }
// console.log(string)

// ---------------------------------//-------------------------------------

/*

* 
* *
*
* * *
*
*
* * * *
*
*
*
* * * * *

*/
// let n = 5
// let string = ""

//  for(i= 1; i<=n ; i++){
  

//    for(j=1 ; j<=i ; j++){
//        string += "* "
//    }
//     string += "\n"
//    if (i==n){
//     break;
//    }
//   for(s=0;s<i-1;s++){
//         string += "*\n"
//   } 
// }
// console.log(string);

/*
*
* * 
*
*
*
* * * *
*
*
*
*
*
* * * * * *

*/

// let n = 3
// let string = ""

//  for(i= 1; i<=n ; i++){
  

//    for(j=0 ; j<i*2 ; j++){
//        string += "* "
//    }
//    string += "\n"
//    if (i==n){
//     break;
//    }
//   for(s=1;s<j+2;s++){
//         string += "*\n"
//   }
    
// }
// console.log(string);

/*

*
* *
*
*
* * * *
*
*
*
*
* * * * * *
*/

// let n = 3;
// let string = "*\n";

// for (let i = 1; i <= n; i++) {
//     // Print '*' in a line with spacing
//     for (let j = 0; j < i * 2; j++) {
//         string += "* ";
//     }
//     string += "\n";

//     if (i === n) {
//         break;
//     }
//     for (let s = 0; s < (i * 2); s++) {
//         string += "*\n";
//     }
// }
// console.log(string);

