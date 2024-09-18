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
 //-------------------------------------