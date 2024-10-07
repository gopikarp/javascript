// Setters and Getters

class User{
    constructor(name){
        this._name = name
    }

    get getName(){
        console.log(this._name)
    }

    set setName(newName){
        this._name = newName
    }
}

const kedar = new User("kedar")
kedar.setName = "John"
kedar.getName