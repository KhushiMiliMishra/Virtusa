const readlineSync = require("readline-sync");

let a = Number(readlineSync.question("Enter first number: "));
let b = Number(readlineSync.question("Enter second number: "));

let lcm = Math.max(a, b);

while (lcm % a !== 0 || lcm % b !== 0) {
    lcm++;
}

console.log("LCM = " + lcm);