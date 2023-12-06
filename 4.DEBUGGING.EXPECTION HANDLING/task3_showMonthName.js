/*
Create the MonthException class whose constructor takes a message parameter and sets the name field with the 'MonthException' value.

Implement the showMonthName(month) function, where the month parameter is the sequential number of the month of the year. 
The function returns the name of the month according to the entered month number.
In case of incorrect input, an exception is thrown in the form of an object of the MonthException class with the message 'Incorrect month number'.

Write code that uses this function, provide handling of possible exceptions.
*/

class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
  }
}

const showMonthName = (month) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  try {
    if (month >= 1 && month <= 12) return months[month - 1];

    throw new MonthException("Incorrect month number");
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);

    return null;
  }
};

console.log(showMonthName(11)); // November
console.log(showMonthName(5)); // May
console.log(showMonthName(22)); // MonthException: Incorrect month number
