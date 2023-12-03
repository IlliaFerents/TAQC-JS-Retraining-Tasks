// 1. The user enters a string. Count the number of spaces in it.
const str = "A string with spaces and stuff";

const spacesCount = str.split(" ").length - 1;
console.log(spacesCount); // 5

// 2. Write a function that converts the first character of a string to uppercase.
const lowerCaseStr = "make me tall";

const capitalizedStr =
  lowerCaseStr.slice(0, 1).toUpperCase() + lowerCaseStr.slice(1);
console.log(capitalizedStr);

// 3. Count the number of words in the string that the user entered.
const wordsCount = str.split(" ").length;
console.log(wordsCount);

// 4. The user enters a phrase. Convert it to an abbreviation.
// For example: portable document format in PDF, object-oriented programming in OOP.
const str2 = "Chief Executive Officer";

const abbreviate = (str) => {
  return str
    .split(" ")
    .map((word) => word.slice(0, 1))
    .join("");
};

console.log(abbreviate(str2)); // CEO

// 5. Check if the entered string is a palindrome.

const isPalindrome = (str) => {
  return str.split("").reverse().join("") === str;
};

console.log(isPalindrome("level")); // true
console.log(isPalindrome("civil")); // false

/*
6. Write a function that takes a url and displays detailed information about it.
   For example: url «https://career.softserveinc.com/uk-ua/technology/course» information:
   protocol: https
   domain: career.softserveinc.com
   path: uk-ua/technology/course
*/
const parseUrl = (url) => {
  const protocolEnd = url.indexOf("://");
  const protocol = url.substring(0, protocolEnd); // https

  const domainStart = protocolEnd + 3;
  const pathStart = url.indexOf("/", domainStart);

  const domain = url.substring(domainStart, pathStart); // career.softserveinc.com
  const path = url.substring(pathStart + 1); // the rest of url(uk-ua/technology/course)

  return {
    protocol,
    domain,
    path,
  };
};

const url = "https://career.softserveinc.com/uk-ua/technology/course";
const parsedUrl = parseUrl(url);
console.log(parsedUrl);
