// // Using Closures
// function BankAccount(accountNum, accountHolderName, balance) {
//     let _accountNumber = accountNum
//     let _accountHolderName = accountHolderName
//     let _balance = balance
    // function showDetails() {
    //     console.log(`Account Number: ${_accountNumber}`);
    //     console.log(`Account Holder Name: ${_accountHolderName}`);
    //     console.log(`Balance: ${_balance}`);
    //  }
     
// function deposit(amt) {
//     _balance  += amt
//     showDetails()

// }

// function withdraw(widAmt) {
//     if (_balance >= widAmt) {
//         _balance -= widAmt
//         showDetails()
//     } else {
//         console.log("Insufficient Balance⚠️ ⚠️");

//     }

// }
// return {
//     deposit: deposit,
//     withdraw: withdraw
// };

// }

// let MyBankAccount =  BankAccount(12333, "Ajith", 2000);

// MyBankAccount.deposit(500); 
// MyBankAccount.withdraw(10000)

// // --------------------------------------------------------------------------------------

// Using Classes
class BankAccount{
    constructor(accountNum, accountHolderName, balance){
        this._accountNumber = accountNum;
        this._accountHolderName = accountHolderName;
        this._balance = balance;
    }
     showDetails() {
        console.log(`Account Number: ${this._accountNumber}`);
        console.log(`Account Holder Name: ${this._accountHolderName}`);
        console.log(`Balance: ${this._balance}`);
     }
     deposit(amt) {
        this._balance  += amt
        this.showDetails()
    
    }
    withdraw(widAmt) {
        if (this._balance >= widAmt) {
            this._balance -= widAmt
            this.showDetails()
        } else {
            console.log("Insufficient Balance⚠️ ⚠️");
    
        }
    }  


}
let MyBankAccount = new BankAccount(12333, "Ajith", 2000);

MyBankAccount.deposit(500); 
MyBankAccount.withdraw(10000)