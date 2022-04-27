// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// function smash(words) {
//   return words.join(" ");
// }

// smash(["hello", "world"]), "hello world";
// smash(["hello", "amazing", "world"]), "hello amazing world";

// smash(["this", "is", "a", "really", "long", "sentence"]),
//   "this is a really long sentence";
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// var summation = function (num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i += 1) {
//   sum += i;
// }
//   return sum
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//   let sum = 0;
//   for (ar of arr) {
//     if (ar > 0) {
//       sum += ar;
//     }
//   }
//   return sum;
// }

// console.log(positiveSum([1, 2, 3, 4, 5]));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//     Note: input will never be an empty string

// function fakeBin(x) {
//   return x
//     .split("")
//     .map((n) => (n < 5 ? 0 : 1))
//     .join("");
// }
// console.log(fakeBin("45385593107843568"));

// fakeBin("45385593107843568");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// var countSheep = function (num) {
//   let greet = "";
//   for (let i = 1; i <= num; i += 1) {
//     greet += `${i} sheep...`;
//   }
//   return greet;
// };
// console.log(countSheep(3));

// function makeUpperCase(str) {
//   const array = str.split("");
//   const result = array.map((arr) => arr.toUpperCase());
//   return result.join("");
// }

// console.log(makeUpperCase("hello"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

// function points(games) {
//   var total = 0;
//   games.map(function (match) {
//     var x = +match[0];

//     var y = +match[2];
//     x > y ? (total += 3) : x === y ? (total += 1) : 0;
//   });
//   return total;
// }

// console.log(
//   points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
// ); //30

// console.log(
//   points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
// ); //10

// console.log(
//   points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
// ); //0
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function countPositivesSumNegatives(input) {
// //   let pos = 0;
// //   let neg = 0;

// //   input.forEach((num) => (num > 0 ? pos++ : (neg += num)));
// //   return [pos, neg];
// }

// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// );
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function betterThanAverage(cP, yP) {
//   let result = 0;
//   for (points of cP) {
//     result += points / cP.length;
//   }

//     return yP > result
//     ///
//     return (
//       yP > cP.reduce((a, b) => a + b, 0) / cP.length
//     );
// }

// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

// function digitize(n) {
//   const number = String(n);
//   const array = number.split("");
//   const digit = array.map((arr) => Number(arr));
//     return digit.reverse();
//     ///
//     return String(n).split("").map(Number).reverse();
// }

// console.log(digitize(35231));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function basicOp(operation, value1, value2) {
//   let result = 0;
//   switch (operation) {
//     case "+":
//       result = value1 + value2;
//       break;

//     case "-":
//       result = value1 - value2;
//       break;

//     case "*":
//       result = value1 * value2;
//       break;

//     case "/":
//       result = value1 / value2;
//       break;

//     default:
//       console.log(0);
//   }
//   return result;
// }
// console.log(basicOp("+", 4, 7));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function findNeedle(haystack) {
//   return `found the needle at position ${haystack.indexOf("needle")} `;
// }

// console.log(
//   findNeedle([
//     "3",
//     "123124234",
//     undefined,
//     "needle",
//     "world",
//     "hay",
//     2,
//     "3",
//     true,
//     false,
//   ])
// );
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function abbrevName(name) {
//   return name
//     .split(" ")
//     .map((i) => i[0].toUpperCase())
//     .join(".");
// }

// console.log(abbrevName("Sam Harris"));
