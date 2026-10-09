const readlineSync = require("readline-sync");

let dobInput = readlineSync.question("Enter your date of birth (YYYY-MM-DD): ");

let dob = new Date(dobInput);
let today = new Date();

let age = today.getFullYear() - dob.getFullYear();

if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() &&
     today.getDate() < dob.getDate())
) {
    age--;
}

console.log("Your age is: " + age);