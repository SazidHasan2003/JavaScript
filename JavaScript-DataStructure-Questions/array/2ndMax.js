let prompt = require('prompt-sync')();

let arr = [1, 2, 10, 4, 5];
let max = arr[0];         // Initialize max with the first element
let secondMax = -Infinity; // Initialize secondMax with the smallest possible value

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max; // Update secondMax to the old max
        max = arr[i];    // Update max to the current value
    } else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i]; // Update secondMax if the current value is greater than secondMax and not equal to max
    }
}

console.log('1st Maximum: ' + max);
console.log('2nd Maximum: ' + secondMax);
