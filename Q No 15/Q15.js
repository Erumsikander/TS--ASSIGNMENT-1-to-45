"use strict";
// Q15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Answer:
// 1: Solve:
let guestArr = ["Sikander", "A.Bari", "A.Hadi", "Arshiyan", "Zohan"];
let canNotAttend = "Zohan";
console.log(canNotAttend + ' ' + "can not attend for Dinner.");
// 2: Solve:
let newGuest = "Hannan";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// 3: Solve:
guestArr.map((item) => console.log(`Dear ${item}, You Are Cordinally Invited to a Dinner`));
