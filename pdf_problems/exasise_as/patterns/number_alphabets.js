// We will also use String.fromCharCode() 
// to convert the number to a letter.

// for(let i = 65; i <= 90; i++){
//     console.log(String.fromCharCode(i));
//   }


// problem - 
////////------------------------
  

// problem - 1 (alpha)
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
