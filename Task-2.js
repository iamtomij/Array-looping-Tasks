// write a javascript code to get the even number from an array using any looping technique.
const numbers = [12, 98, 41, 23, 78, 46];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);
