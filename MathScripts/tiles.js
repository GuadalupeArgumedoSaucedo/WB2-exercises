"use strict"

// dimensions l x w
//each bos has 12 (1 x 1" tiles)
//how many boxes do you need? 

let length = 20;
let width = 10;
let calcdimentions = length * width;
let boxesneeded = calcdimentions / 12;
let percent = .1;
let additionalneeded = boxesneeded * percent;


//
console.log("You need " + Math.ceil(boxesneeded) + " and an additional " + Math.ceil(additionalneeded))