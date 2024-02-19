"use strict";
// Q No 3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Answer:
let PersonName = "Erum Sikander";
// **** Step 1 Show in LowerCase ***
let LowerCaseName = PersonName.toLowerCase();
console.log(LowerCaseName);
// **** Step 2 Show in UpperCase ***
let UpperCaseName = PersonName.toUpperCase();
console.log(UpperCaseName);
// **** Step 3 Show in TitleCase ***
let words = PersonName.split(" ");
let TitleCaseName = "";
for (let i = 0; i < words.length; i++) {
    TitleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(TitleCaseName);
