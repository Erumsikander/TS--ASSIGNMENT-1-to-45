"use strict";
// Q19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Answer:
// let guestArr: string[] = ["Amber", "Iqra", "Sidra", "Hussan"];
// let canNotattend: string = "";
// let newGuest: string = "Fariya";
// guestArr[guestArr.indexOf(canNotattend)] = newGuest;
// guestArr.unshift("Nabeel");
// let middleGuest: string = "Saad";
// let middleIndex = guestArr.length / 2;
// guestArr.splice(middleIndex, 0, middleGuest);
// guestArr.push("Faisal");
// console.log(guestArr);
//  console.log(guestArr.length + " " + "Persons" + " " + "are invited to the dinner");
let guestArr = ["Amber", "Iqra", "Sidra", "Hussan"];
let canNotattend = "";
let newGuest = "Fariya";
if (canNotattend !== "") {
    let index = guestArr.indexOf(canNotattend);
    if (index !== -1) {
        guestArr[index] = newGuest;
    }
    else {
        guestArr.push(newGuest);
    }
}
else {
    guestArr.unshift(newGuest);
}
let middleGuest = "Saad";
let middleIndex = Math.ceil(guestArr.length / 2);
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Faisal");
console.log(guestArr);
console.log(guestArr.length + " " + "Persons" + " " + "are invited to the dinner");
