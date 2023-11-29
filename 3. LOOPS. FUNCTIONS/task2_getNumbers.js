/*
Given two integers, a and b (a < b).
Print all integers from a to b inclusive, such that 'a' is printed once, 'a + 1' is printed twice, and so on.
*/

const getNumbers = (a, b) =>
  new Array(b)
    .fill(a)
    .map((v, i) => Number(String(v + i).repeat(i + 1)))
    .join("")
    .split("")
    .join(", ");

console.log(getNumbers(1, 3)); // 1, 2, 2, 3, 3, 3
