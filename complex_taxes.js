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


if(hoursworked <= 40) {
    console.log(`your annual pay is ${annualfullpay}`);
}
else if(hoursworked > 40) {
    console.log(`your annual pay with overtime is ${annualotpay}`);//annual gross pay
}

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
