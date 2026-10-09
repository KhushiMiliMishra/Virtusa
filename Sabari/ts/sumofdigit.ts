function sumOfDigits(num: number): number {
  let sum: number = 0;
  num = Math.abs(num);
 
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
 
const number: number = 12345;
console.log(`Sum of digits of ${number} = ${sumOfDigits(number)}`);