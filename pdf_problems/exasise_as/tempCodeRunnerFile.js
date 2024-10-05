const read = require('prompt-sync')();
let my_string = read("enter")

let str = my_string.split("").reverse("").join() 

if(my_string == str){
    console.log("good");
}else{
    console.log("not good");
}