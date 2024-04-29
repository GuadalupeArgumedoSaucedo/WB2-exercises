"use strict";
//pay rules
let payRate = 10;// can change
let hoursWorked = 45;//can change
let grossPay;

if (hoursWorked > 40) {
    const overtimeHours = hoursWorked - 40;
    const overtimePay = overtimeHours * (1.5 * payRate);
    grossPay = (40 * payRate) + overtimePay;//annual gross pay
} else {
    grossPay = hoursWorked * payRate;
}

console.log(`You worked ${hoursWorked} hours this period.`);//1
console.log(`Because you earn $${payRate.toFixed(2)} per hour, your gross pay is $${grossPay.toFixed(2)}.`);//2

//annual
let weeks = 52;

let annual = grossPay * weeks

console.log(`Your annual income is $${annual.toFixed(2)}.`)//3

//tax rate
let withholdings;
let relationship = "single";// can change

console.log(`Your filing status is ${relationship}.`)//4


if (relationship = "single"){
    if (annual < 12000) {
        withholdings = grossPay * .05;
    } 
    else if((annual >= 12000) && (grossPay < 24999.99)){
        withholdings = grossPay * .1;
    }
    else if ((annual >= 25000) && (grossPay < 74999.99)){
        withholdings = grossPay * .15;
    }
    else if (annual > 75000){
        withholdings = grossPay * .2;
    }
}
else if (relationship = "joint"){
    if (annual < 12000) {
        withholdings = grossPay * .0;
    } 
    else if((annual >= 12000) && (grossPay < 24999.99)){
        withholdings = grossPay * .06;
    }
    else if ((annual >= 25000) && (grossPay < 74999.99)){
        withholdings = grossPay * .11;
    }
    else if (annual > 75000){
        withholdings = grossPay * .2;
    }
}

console.log(`Your tax withholdings this period is $${withholdings.toFixed(2)}.`)//5


//net pay
let netpay = grossPay-withholdings;

console.log(`Your net pay is $${netpay.toFixed(2)}.`)//6
