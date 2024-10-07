// Using Closures
function BankAccount(accountNum, accountHolderName, balance) {
    let _accountNumber = accountNum
    let _accountHolderName = accountHolderName
    let _balance = balance
    function showDetails() {
        console.log(`Account Number: ${_accountNumber}`);
        console.log(`Account Holder Name: ${_accountHolderName}`);
        console.log(`Balance: ${_balance}`);
     }
     
function deposit(amt) {
    _balance  += amt
    showDetails()

}

function withdraw(widAmt) {
    if (_balance >= widAmt) {
        _balance -= widAmt
        showDetails()
    } else {
        console.log("Insufficient Balance");

    }

}
return {
    deposit: deposit,
    withdraw: withdraw
};

}

let MyBankAccount =  BankAccount(12333, "Ajith", 2000);

MyBankAccount.deposit(500); 
MyBankAccount.withdraw(10000)

