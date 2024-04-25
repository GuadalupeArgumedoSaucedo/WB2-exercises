"use strict"

let vanseats = 15;
let vancost = 250;
let numberofpeople = 38;

let numberofvans = Math.ceil(numberofpeople / vanseats);
let vanrenttotal = numberofvans * vancost;
let costperperson = vanrenttotal / numberofpeople ;
let moneycollected = Math.round(costperperson) * numberofpeople;

console.log(`the number of vans required are: ${numberofvans}`); 
console.log(`This is the total rent cost for the vans: $${vanrenttotal.toFixed(2)}`)
console.log(`This is the total money collected per person: $${Math.round(costperperson)}`)
console.log(`This is the total money collected: $${moneycollected}`)




