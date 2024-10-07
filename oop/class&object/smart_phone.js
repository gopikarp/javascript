// class
class SmartPhones {

    // constructor Method - auto call when object initialised
    constructor(make, model_name, price) {
        this.make = make
        this.modelName = model_name
        this.price = price
        let color
        // console.log("if u create object it call the constructor Method");
    }

    // Prototype Method - call using object
    phonDetails() {
        console.log("Made: By " + this.make);
        console.log("Model: " + this.modelName);
        console.log("price: " + this.price);
    }
    showPrice() {
        console.log("Price$ of " + this.modelName + " is " + this.price);

    }

    // static Method - call only using class
  static  StaticMessage() {
        console.log("this is a static methode😎");


    }
}

//Object
let Mi = new SmartPhones()
Mi.color = "black"
console.log(Mi.color);// constructor Method 

let Iphone = new SmartPhones("Apple", "14pro max", 1800000)
console.log(Iphone);// constructor Method 

let samsung = new SmartPhones("samsung", "s23 ultra", 70000)
console.log(samsung.modelName);// constructor Method 

samsung.phonDetails() // Prototype Method 

samsung.showPrice() // Prototype Method 

SmartPhones.StaticMessage()