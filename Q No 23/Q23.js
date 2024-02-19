"use strict";
// Q23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// Answer:
let car = 'subaru';
// 1 Solve:
console.log("Is car equal to 'subaru'? I predict True.");
console.log(car === 'honda');
//  2 Solve:
console.log("Is car not equal to 'hilux'? I predict True.");
console.log(car !== 'hilux');
// 3 Solve:
console.log("Is car length less than 5? I predict False.");
console.log(car.length < 5);
// 4 Solve:
console.log("Is car length greater than 7? I predict False.");
console.log(car.length > 7);
// 5 Solve:
console.log("Is car equal to 'Subaru'? I predict False (case-sensitive comparison).");
console.log(car === 'Subaru');
