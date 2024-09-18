// // Exasise 1
// function add (a,b){

//     console.log(a+b)
// }
// add(10,20)
// /////-------------------

// // // Exasise 2
// var factor = "kamal"
// var fplayer = "doni"
// var fmovie = "sivam"
 
// function favorate(){
//     console.log("favorate actor is : "+factor);
//     console.log("favorate player is : "+fplayer);
//     console.log("favorate movie is : ",fmovie);
// }
// favorate()
// // /////-------------------

// // Exasise 3
// function area(length,breadth){
//     a = length * breadth
//     console.log("area is : "+a);
// }
// area(10,20)
// // // /////-------------------

// // Exasise 4
// function add(a,b){
//     return a+b
// }
// var total = add(10,2)
// console.log(total)
// // // /////-------------------\

// // Exasise 5 if
// var rain = false

// if (rain == true){
//     console.log("take an umbrella")
// }else{
//     console.log("Enjoy the sunshine")
// }
// // // /////-------------------\
// // Exasise 5.1
// var hw = false
// if(hw==true){
//     console.log("greate job")
// }else{
//     console.log("finish your hw berfore playing")
// }
// Exasise 5.2
// var brush = false
// if(brush==true){
//     console.log("greate job")
// }else{
//     console.log("go brush your teeth")
// }
// // // /////-------------------\
// // Exasise 6
// console.log(false && true && true)
// console.log(false|| false || true )
// console.log(!true)
// console.log(!false)
// // // /////-------------------\
// // Exasise 7
// var color = 'red'
// if(color == 'yellow'){
//     console.log("get ready")
// }else if(color == 'red'){
//     console.log("stop")
// }else if(color == 'green'){
//     console.log("Go")
// }else{
//     console.log("this is wrong")
// }
// // // /////-------------------\

// // Exasise 7.1
// var score = 50
// if(score<50){
//     console.log("you need to improve")
// }else if(score=>50 && score<70){
//     console.log("greate job")
// }else if(score >= 70){
//     console.log("excellent")
// }
// // // /////-------------------\

// // Exasise 8 for loop

// for(i=10;i>=0;i--){
//     console.log(i)
// }
// // Exasise 8.1
// for(i=0;i<=10;i+=2){//i=i+2
//     console.log(i)
// }
// // Exasise 8.2
// for(i=1;i<=10;i++){
  
//     console.log(i+"x2="+2*i)
// }
// // // /////-------------------\

// // Exasise 9
// var a = Math.random()
// console.log(a*10)
// var b = Math.floor(7.99)//output will be 7
// console.log(b)
// console.log(Math.floor(a*10)+2)//random number will be 0-20
// // // /////-------------------\

// for(var i=1;i<=10;i++){
//     console.log(i+"x 5="+ 5*i)
// }
//limit
var limit=10

var sum=0

for(var i =1;i<=limit; i++){
    if(i%2 != 0){
        sum+=i
    }
}
console.log(sum)
