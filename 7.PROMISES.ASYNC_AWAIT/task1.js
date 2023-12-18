// Implement a function calcArrProduct(arr) that takes an array of numbers.
// Function should return a Promise which being resolved with the product of the array elements, if they are of type Numbers,
// or rejected with the message "Error! Incorrect array!" if at least 1 element of the array is not a number.

const calcArrProduct = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.every((e) => typeof e === "number")) {
      resolve(arr.reduce((acc, e) => acc * e, 1));
    } else {
      reject("Error! Incorrect array!");
    }
  });
};

calcArrProduct([3, 4, 5]).then((result) => console.log(result)); // 60

calcArrProduct([5, "user2", 7, 12]).catch((err) => console.log(err)); // "Error! Incorrect array!"
