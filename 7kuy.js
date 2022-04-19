// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

function f(friends) {
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
}

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
