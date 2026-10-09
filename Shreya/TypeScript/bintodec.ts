function binaryToDecimal(binary: string): number {
    let decimal = 0;
    for (const digit of binary) {
        if (digit !== '0' && digit !== '1') {
            throw new Error("Invalid binary number");
        }
        decimal = decimal * 2 + Number(digit);
    }
    return decimal;
}
console.log(binaryToDecimal("1011011"));