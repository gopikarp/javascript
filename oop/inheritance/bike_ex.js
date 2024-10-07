// Inheritance
// BaseClz(Parent) - Bike
// DeerivedClz(Child) - SportsBike

// class
class Bike {

    // constructor Method - auto call when object initialised
    constructor( model_name, price,colors) {
        let make 
        this.modelName = model_name
        this.price = price
       this.colors = colors
        // console.log("if u create object it call the constructor Method");
    }

    // Prototype Method - call using object
    BikeDetails() {
       
        console.log("Model: " + this.modelName);
        console.log("price: " + this.price);
        console.log("color: " + this.colors);
    }
    BikePrice() {
        console.log("Price$ of " + this.modelName + " is " + this.price);

    }

    // static Method - call only using class
    static StaticMessage() {
        console.log("this is a static methode😎");


    }
}


class SportsBike extends Bike {

}

let SpBike1 = new SportsBike("KTM RC-200",80000,"red")

SpBike1.BikeDetails();

SpBike1.BikePrice()
