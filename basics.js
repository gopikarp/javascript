/*
Enter the array limit 3    
12
22
33
enterd values are: ,12,22,33
*/
// const read = require('prompt-sync')()
// let limit = read("Enter the array limit ")
// let array1 = []
// for(let i=1 ; i<=limit ; i++){
//     array1[i]=read()
// }

// console.log("enterd values are: "+array1)

// ---------------------------------//-------------------------------------
/*
Enter the array limit 3    
22
44
34
enterd value : 22
enterd value : 44
enterd value : 34
*/
// const read = require('prompt-sync')()
// let limit = read("Enter the array limit ")
// let array1 = []
// for(let i=1 ; i<=limit ; i++){
//     array1[i]=read()
// }

// for(let i=1 ; i<=limit ; i++){
//     console.log("enterd value : "+array1[i])
// }

/*
2. Animal Sounds
Write a program with two classes:
Animal: Contains methods like bark(), meow(), and roar() that print 
different animal sounds. AnimalActions: Inherits Animal and provides 
a menu to let the user choose which animal sound they want to hear.
*/
const read = require('prompt-sync')()
class Animal{
    bark(){console.log("dog"); }
    meow(){ console.log("cat");}
    roar(){ console.log("lion");}
}


class AnimalActions extends Animal{
    bark() {
        console.log("This dog has a louder bark!");
    }
}
class Bird extends Animal{
    fly(){ console.log("parrot");
    }
 
}

const animalActions = new AnimalActions();
const bird =new Bird();

let choice
do{
console.log("1 Bark \n2 meow\n3 roar\n4 bird\n5 Exite");
 choice = parseInt(read("enter the choice: "))

switch(choice){
    case 1:
            animalActions.bark();
            break;
        case 2:
            animalActions.meow();
            break;
        case 3:
            animalActions.roar();
            break;
         case 4:
        bird.fly();
           break;
        case 5:
            console.log("Exiting...");
            break;
        default:
            console.log("Invalid choice! Please choose again.");
}

}while (choice !== 5);