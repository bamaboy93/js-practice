// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(numbers);

// const total = [];
// for (const num of numbers) {
//   if (num % 2 === 0) {
//     total.push(num);
//   }
// }

// console.log(total);

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function filterArray(numbers, value) {
//   let result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (value < numbers[i]) {
//       result.push(numbers[i]);
//     }
//   }
//   return result;
// }

// function filterArray(numbers, value) {
//   let result = [];
//   for (const number of numbers) {
//     if (value < number) {
//       result.push(number);
//     }
//   }
//   return result;
// }

// function filterArray(numbers, value) {
//   let result = [];
//   numbers.forEach(function (number) {
//     if (value < number) {
//       result.push(number);
//     }
//   });
//   return result;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function getCommonElements(array1, array2) {
//   let result = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       result.push(array1[i]);
//     }
//   }
//   return result;
// }

// function getCommonElements(array1, array2) {
//   let result = [];
//   for (const arr of array1) {
//     if (array2.includes(arr)) {
//       result.push(arr);
//     }
//   }
//   return result;
// }

// function getCommonElements(array1, array2) {
//   let result = [];
//   array1.forEach(function (arr) {
//     if (array2.includes(arr)) {
//       result.push(arr);
//     }
//   });
//   return result;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// function includes(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

// function includes(array, value) {
//   for (const arr of array) {
//     if (arr === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// );
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// );
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));

// function findMatches(array, ...args) {
//   const matches = [];
//   for (const arr of array) {
//     if (args.includes(arr)) {
//       matches.push(arr);
//     }
//   }

//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);

//     this.potions.splice(potionIndex, 1);
//     return this.potions;
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// function doSomething(a) {
//   function doSomethingElse(a) {
//     return a - 1;
//   }
//   console.log(doSomethingElse(a * 2));
//   var b;
//   console.log(a);
//   b = a + doSomethingElse(a * 2);

//   console.log(b * 3);
// }

// console.log(doSomething(2)); // 15
