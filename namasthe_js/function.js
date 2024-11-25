// var n = 6
// function square(num){
//     var ans = num*num;
//     return ans;
// }
// var square2 = square(n)
// var square4 = square(4);

// console.log(square2)
// console.log(square4)

// ---------------------------------//-------------------------------------
getName()//Namasthe js
console.log(x);//undefined
var x = 5//if no value --- error not defined
function getName() {
    console.log('Namasthe js');
}

// getName2()// if getName2 is a arrow function -- error bcz behave like variable not function
var getName2 = () => {
    console.log('Namasthe js');
}//so function will define and other are error||un define
var getName3 = function () {

}//same for getName2 cant consider function
//Hosting in js
// -- access variables and function even it not initialise it(without any error)