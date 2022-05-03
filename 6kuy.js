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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// function sortArray(array) {
//   const even = array.map((elm) => (elm % 2 === 0 ? elm : ""));

//   const odd = array.filter((elm) => elm % 2 !== 0).sort((a, b) => a - b);

//   const result = [];

//   for (let i = 0, j = 0; i < array.length; i += 1) {
//     if (even[i] === "") {
//       result.push(odd[+j]);
//       j += 1;
//     } else {
//       result.push(even[i]);
//     }
//   }
//   return result;
///////
//   const odd = array.filter((elem) => elem % 2 !== 0).sort((a, b) => a - b);
//   return array.map((elem) => (elem % 2 === 0 ? elem : odd.shift()));
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4]));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// function findUniq(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[0] == arr[1] ? arr.pop() : arr[0];
// }

// console.log(findUniq([1, 0, 0]));
// console.log(findUniq([1, 1, 1, 2, 1, 1]));
