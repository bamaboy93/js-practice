// function arrayDiff(a, b) {
//   return a.filter((n) => b.indexOf(n) === -1);
//   ////
//   return a.filter((e) => !b.includes(e));
// }

// console.log(arrayDiff([1, 2, 2], [1]));
// console.log(arrayDiff([1, 2, 3], [1, 2]));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']

// var uniqueInOrder = function (iterable) {
//   const result = [];

//   for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i] !== iterable[i + 1]) {
//       result.push(iterable[i]);
//     }
//   }
//   return result;
// };

// console.log(uniqueInOrder("AAAABBBCCDAABBB"));
