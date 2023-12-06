/*
Implement the calcRectangleArea(width, height) function, which takes 2 parameters, the rectangle width and height, and calculates its area. 
Provide termination of program execution and generation of an exception if non-numeric parameters are passed to the function. 

Write code that uses this function and handles possible exceptions.
*/

function isNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}

const calcRectangleArea = (width, height) => {
  try {
    if (!isNumber(width) || !isNumber(height))
      throw new Error("Width and height must be numbers");
    if (width <= 0 || height <= 0)
      throw new Error("Widht and height must be non-negative");

    return width * height;
  } catch (error) {
    console.log(error.message);

    return null;
  }
};

console.log(calcRectangleArea(5, 6)); // 30
console.log(calcRectangleArea(-2, 6)); // Widght and height must be non-negative
console.log(calcRectangleArea("5", 6)); // Widght and height must be numbers
console.log(calcRectangleArea(5, NaN)); // Widght and height must be numbers
