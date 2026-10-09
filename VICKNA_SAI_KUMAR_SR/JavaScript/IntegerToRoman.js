
const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function integerToRoman(number) {
    const values = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];

    let result = "";

    for (const [value, symbol] of values) {
        while (number >= value) {
            result += symbol;
            number -= value;
        }
    }

    return result;
}

input.question("Enter an integer between 1 and 3999: ", (answer) => {
    const number = Number(answer);

    if (Number.isInteger(number) && number >= 1 && number <= 3999) {
        console.log("Roman numeral: " + integerToRoman(number));
    } else {
        console.log("Please enter a valid integer between 1 and 3999.");
    }

    input.close();
});
