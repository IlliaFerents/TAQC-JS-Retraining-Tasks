/* 4. 
The function takes three lengths of the sides of a triangle a, b, c.
Determine and return the area of the triangle from the function.
Check whether the values a, b, c entered into the function are correct (a triangle can exist with such sides), otherwise print 'Incorrect data'. 
*/

const triangleArea = (a, b, c) => {
  if (a + b > c && a + c > b && b + c > a) {
    const semiPer = (a + b + c) / 2;

    const triangleArea = Math.sqrt(
      semiPer * (semiPer - a) * (semiPer - b) * (semiPer - c),
    );

    return triangleArea.toFixed(3);
  } else {
    console.log("Invalid side length value");

    return null;
  }
};

console.log(triangleArea(3, 4.353454, 5.122525)); // 6.516
console.log(triangleArea(12, 4.353454, 5.122525)); // Invalid side length value, null
