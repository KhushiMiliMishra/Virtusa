
const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

input.question("Enter the minimum value: ", (minInput) => {
    input.question("Enter the maximum value: ", (maxInput) => {
        const min = Number(minInput);
        const max = Number(maxInput);

        if (Number.isInteger(min) && Number.isInteger(max) && min <= max) {
            console.log("Random integer: " + generateRandomInteger(min, max));
        } else {
            console.log("Please enter valid integers, with minimum less than or equal to maximum.");
        }

        input.close();
    });
});
