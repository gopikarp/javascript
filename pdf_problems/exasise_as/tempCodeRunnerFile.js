t = 5
let string = ""
let val = 1

for(i=1;i<=limit;i++){
    for(j=1;j<=i;j++){
    // string = string + i
    string = string + val
    val++
    }
    string += "\n";
}
console.log(string)