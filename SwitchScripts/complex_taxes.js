let payrate = 10;
let hoursworked = 45;

let regular = 40;
let overtime = 1.5;

let pay = hoursworked * payrate; //hrs*pay
let regularhours = regular * payrate;//40hr work week
let overtimehours = hoursworked - regular; //5 ot hr
let ot = payrate * overtime;//30*1.5
let overtimepay = overtimehours * ot;//5*1.5
let totalovertime = regularhours + overtimepay;//40 hr workweek + 5*1.5


//annual
let year = 52;
let annualfullpay = pay*year;
let annualotpay = totalovertime*year

let grossPay;

if (hoursworked <= 40) {
    grossPay = annualfullpay; // Assigning grossPay for regular hours
} else if (hoursworked > 40) {
    grossPay = annualotpay; // Assigning grossPay for overtime hours
}

console.log(`Your annual income is $${grossPay.toFixed(2)}.`);

//tax rate
let withholdings;
let relationship = "single";// can change

console.log(`Your filing status is ${relationship}.`)//4



if (relationship === "single") { // Use === for comparison, not =
    if (grossPay < 12000) {
        withholdings = grossPay * 0.05;
    } 
    else if (grossPay >= 12000 && grossPay < 24999.99){
        withholdings = grossPay * 0.1;
    }
    else if (grossPay >= 25000 && grossPay < 74999.99){
        withholdings = grossPay * 0.15;
    }
    else if (grossPay > 75000){
        withholdings = grossPay * 0.2;
    }
}
else if (relationship === "joint") { // Use === for comparison, not =
    if (grossPay < 12000) {
        withholdings = grossPay * 0.0;
    } 
    else if (grossPay >= 12000 && grossPay < 24999.99){
        withholdings = grossPay * 0.06;
    }
    else if (grossPay >= 25000 && grossPay < 74999.99){
        withholdings = grossPay * 0.11;
    }
    else if (grossPay > 75000){
        withholdings = grossPay * 0.2;
    }
}

console.log(`Your tax withholdings this period is $${withholdings.toFixed(2)}.`);//5


//net pay
let netpay = grossPay-withholdings;

console.log(`Your net pay is $${netpay.toFixed(2)}.`)//6
