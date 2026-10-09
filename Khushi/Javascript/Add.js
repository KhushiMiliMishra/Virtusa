const readlineSync = require("readline-sync");

function add(a, b, c) {
    if (c === undefined) {
        return a + b;
    } else {
        return a + b + c;
    }
}

let choice = Number(readlineSync.question("Enter number of values (2 or 3): "));

if (choice === 2) {
    let a = Number(readlineSync.question("Enter first number: "));
    let b = Number(readlineSync.question("Enter second number: "));

    console.log("Sum = " + add(a, b));

} else if (choice === 3) {
    let a = Number(readlineSync.question("Enter first number: "));
    let b = Number(readlineSync.question("Enter second number: "));
    let c = Number(readlineSync.question("Enter third number: "));

    console.log("Sum = " + add(a, b, c));
}