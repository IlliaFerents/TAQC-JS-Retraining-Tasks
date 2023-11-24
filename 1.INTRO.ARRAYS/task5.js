/* 5. 
The function receives an array of numbers in the variable numsArr:

find the number that is most often included in the array,
put this number into a new array
create new array without all occurrences of this number.
*/

const filterMostOftenNumber = (numsArr) => {
  let numCountMap = {};
  let mostFrequentNumber = 0;
  let maxCount = 0;

  for (let item of numsArr) {
    if (numCountMap[item] == null) {
      numCountMap[item] = 1;
    } else {
      numCountMap[item]++;
    }

    if (numCountMap[item] > maxCount) {
      mostFrequentNumber = item;
      maxCount = numCountMap[item];
    }
  }
  return numsArr.filter((num) => num !== mostFrequentNumber);
};

console.log(filterMostOftenNumber([6, 2, 2, 2, 4, 4, 5, 4])); // [ 6, 4, 4, 5, 4 ]
