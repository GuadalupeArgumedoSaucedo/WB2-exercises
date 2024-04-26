"use strict";

// Input: declaring variables
let payRate = 17.30;
let hoursWorked = 45;
let grossPay;

// Algorithm: Calculate gross pay considering overtime
// Employees are paid 1.5 times the pay rate for hours worked beyond 40
if (hoursWorked > 40) {
    const overtimeHours = hoursWorked - 40;
    const overtimePay = overtimeHours * (1.5 * payRate);
    grossPay = (40 * payRate) + overtimePay;
} else {
    grossPay = hoursWorked * payRate;
}

// Output: Display the payment details
console.log(`Remsey has worked ${hoursWorked} hours this week. His pay rate is $${payRate.toFixed(2)} per hour.\nHis gross pay is $${grossPay.toFixed(2)}.`);