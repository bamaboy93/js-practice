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
