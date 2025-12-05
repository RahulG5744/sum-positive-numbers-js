// Program to find the sum of only positive numbers in an array

function sumPositive(arr) {
    return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
}

const numbers = [12, -5, 9, -3, 18, -7, 25];

const total = sumPositive(numbers);

console.log("Numbers:", numbers);
console.log("Sum of positive numbers:", total);
