// Q16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.

// Answer:

let guestArr: string[] = ["Erum", "Saba", "Jannat", "Fatima", "Noor"];
console.log(guestArr)
let canNotAttend: string = "Saba";
console.log(canNotAttend + ' '+  "can not attend.");
let newGuest: string = "Amber"
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)
guestArr.map((item) => (
console.log(`Dear ${item}, I Found a Bigger Dinner Table`)
));

let guestBegin: string = "Mehnaz";
guestArr.unshift(guestBegin);
console.log(guestArr)
let middleGuest: string = "Shafaq";
let middleIndex = guestArr.length/2
guestArr.splice(middleIndex,0,middleGuest)
console.log(guestArr)
    guestArr.push("Sobhan")
    console.log(guestArr)

    guestArr.map((item) => (
        console.log(`Dear ${item}, You Are Codinally Invited To a Dinner.`)
        ));