/* 3. 
The function receives an array of numbers in the numsArr variable. 
You need to create a new array with only the numbers from the numsArr variable that are divisible by 3, 5, 7, 11, 13 without a remainder
*/

const numsArr = [13, 1111, 5005, 15015, 45045];

const primeNumbers = (arr) => {
  const divisors = [3, 5, 7, 11, 13];
  return arr.filter((num) => divisors.every((divisor) => num % divisor === 0));
};

console.log(primeNumbers(numsArr)); // [ 15015, 45045 ]
