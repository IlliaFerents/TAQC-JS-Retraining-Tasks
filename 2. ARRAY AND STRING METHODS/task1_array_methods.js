// 1. Create an array of 20 elements and fill it with random numbers from 1 to 100.
const arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));

console.log(arr); // [ 41, 31,  2, 21, 94, 43, 4, 2, 30, 11, 39, 14, 64, 6, 76, 58, 29, 34, 44, 79 ]

// 2. Display each element of the array in the form:
// [1] – 5
// [2] – 78 ... etc.
arr.forEach((e, i) => {
  console.log(`[${i + 1}] – ${e}`);
});

// 3. Check whether the array contains a number that is a multiple of 7.
const divisibleBySeven = (arr) => arr.some((num) => num % 7 === 0);

console.log(divisibleBySeven(arr)); // true / false

// 4. Sort the array in descending order.
console.log(arr.sort((a, b) => b - a)); // [  85, 78, 69, 68, 65...]

// 5. Fill the second half of the array with zeros.
arr.fill(0, arr.length / 2);
console.log(arr); // [ 96, 95, 91, 79, 78, 74, 66, 62, 56, 53,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ]

// 6. Remove the first 3 elements from the array using one method.
arr.slice(3);
console.log(arr);

// 7. Check if the array has duplicates.
const hasDuplicates = (arr) => {
  return arr.some((e, i) => arr.indexOf(e) !== i);
};

console.log(hasDuplicates(arr)); // true / false

// 8. Create a new array in which to write the second half of the main array.
const halfArray = arr.length / 2;
const secondHalf = [...arr.splice(halfArray, halfArray)];
console.log(secondHalf);

// 9. Count the number of even numbers in the array.
const countEven = (arr) => {
  const evenNums = arr.filter((num) => num % 2 == 0);

  return evenNums.length;
};

console.log(countEven(arr));
