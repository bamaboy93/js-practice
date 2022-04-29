// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

// function f(friends) {
//   let fellas = [];
//   for (friend of friends) {
//     if (friend.length === 4) {
//       fellas.push(friend);
//     }
//   }
//   return fellas;
//
//     const list = friends.filter((n) => n.length === 4);
// //   return list;
// }

// console.log(f(["Ryan", "Kieran", "Mark"]));
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Find shortest word in the string
//
// function findShort(s) {
//   const words = s.split(" ");

//   const numbers = words.map((word) => word.length);

//   return Math.min(...numbers);
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// function oddOrEven(array) {
//   let result = 0;
//   for (arr of array) {
//     console.log(arr);
//     result += arr;
//   }
//   if (result % 2 === 0) {
//     return "even";
//   }
//   return "odd";

//   /////////////////////
//   return array.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
// }

// console.log(oddOrEven([0, 1, 5]));
// console.log(oddOrEven([0, 1, 2]));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function filter_list(l) {
//   // let result = [];
//   // for (x of l) {
//   //   if (typeof x === "number") {
//   //     result.push(x);
//   //   }
//   // }
//   // return result;
//   return l.filter((x) => typeof x === "number");
// }

// console.log(filter_list([1, "a", "b", 0, 15]));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function descendingOrder(n) {
//   return parseInt(String(n).split("").sort().reverse().join(""));
// }

// console.log(descendingOrder(123456789));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
// function reverseWords(str) {
//   str = str.split(" ");

//   str = str.map((x) => x.split("").reverse());

//   str = str.map((x) => x.join(""));
//   return str.join(" ");

//   ///
//   return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }

// console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
// console.log(reverseWords("apple"));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// function highAndLow(numbers) {
//   const array = numbers.split(" ").map((arr) => Number(arr));

//   const low = Math.min(...array);

//   const high = Math.max(...array);

//   return `${high} ${low}`;
// ///////
//   numbers = numbers.split(" ");
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }

// console.log(highAndLow("1 2 3"));
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// function Jaden(s) {
//   return s
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(Jaden("How can mirrors be real if our eyes aren't real"));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// function openOrSenior(data) {
//   return data.map((x) => (x[0] >= 55 && x[1] > 7 ? "Senior" : "Open"));
//   //////
//   return data.map(([age, handicap]) =>
//     age > 54 && handicap > 7 ? "Senior" : "Open"
//   );
// }

// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ])
// );

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function multiply(x, y) {
  let res = 0
  if ()

}

console.log(multiply(3, 9));
