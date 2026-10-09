
const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function rgbToHex(red, green, blue) {
    const values = [red, green, blue];

    return "#" + values
        .map(value => value.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase();
}

input.question("Enter red value (0-255): ", (redInput) => {
    input.question("Enter green value (0-255): ", (greenInput) => {
        input.question("Enter blue value (0-255): ", (blueInput) => {
            const red = Number(redInput);
            const green = Number(greenInput);
            const blue = Number(blueInput);

            const values = [red, green, blue];

            if (values.every(value => Number.isInteger(value) && value >= 0 && value <= 255)) {
                console.log("Hexadecimal color: " + rgbToHex(red, green, blue));
            } else {
                console.log("Please enter integers between 0 and 255.");
            }

            input.close();
        });
    });
});
