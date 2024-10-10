// examples

// function ShoppingCart(productName,Price){
//     let _name = productName
//     let _price = Price

//     function viewCart(){
//         console.log(`U added Items: ${_name}`);
//         console.log(`total: ${_price}`);
//     }
//     function addItem(item,prices){
//         _name +=  "," + item 
//         _price += prices
//         viewCart()
//     }

//     function removeItem(item,prices){
//         _name -=  "," + item 
//         _price -= prices
//         viewCart()
//     }
//     return {
//         addItem: addItem,
//         removeItem: removeItem
//     };
// }



// let myCart = ShoppingCart("Apple", 2.5);

// myCart.addItem("orang", 9.5);
// myCart.addItem("Banana", 5);
// myCart.removeItem("orang");

/////-------------------------------------------------====


function ShoppingCart(productName, price) {
    let items = [{ name: productName, price: price }];  // Store items as objects in an array

    // Function to view the cart
    function viewCart() {
        console.log("Items in your cart:");
        items.forEach(item => {
            console.log(`${item.name}: $${item.price}`);
        });
        let total = items.reduce((sum, item) => sum + item.price, 0);  // Calculate total price
        console.log(`Total: $${total}`);
    }

    // Function to add an item
    function addItem(item, itemPrice) {
        items.push({ name: item, price: itemPrice });  // Add item to the array
        viewCart();
    }

    // Function to remove an item
    function removeItem(itemName) {
        let index = items.findIndex(item => item.name === itemName);  // Find item by name
        if (index !== -1) {
            items.splice(index, 1);  // Remove item from the array
            console.log(`${itemName} has been removed from the cart.`);
        } else {
            console.log(`${itemName} is not in the cart.`);
        }
        viewCart();
    }

    return {
        addItem: addItem,
        removeItem: removeItem
    };
}

// Example usage
let myCart = ShoppingCart("Apple", 2.5);

myCart.addItem("Orange", 9.5);  // Corrected spelling of 'Orange'
myCart.addItem("Banana", 5);
myCart.removeItem("Orange");  // Pass only the item name
