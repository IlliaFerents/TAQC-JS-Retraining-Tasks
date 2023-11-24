/* 2. 
Write a script that calculates the number of seconds in an hour, in a day, in a month, 
and writes the results to the appropriate variables: secH secD secM
*/

const secondsInMin = 60;
const minsInHour = 60;
const hoursInDay = 24;
const daysInMonth = 30;

const secH = secondsInMin * minsInHour;
const secD = secondsInMin * minsInHour * hoursInDay;
const secM = secondsInMin * minsInHour * hoursInDay * daysInMonth;

console.log(secH); // 3600
console.log(secD); // 86400
console.log(secM); // 2592000
