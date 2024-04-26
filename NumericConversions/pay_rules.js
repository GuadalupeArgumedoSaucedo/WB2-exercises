let payrate = 30;
let hoursworked = 45;

let regular = 40;
let overtime = 1.5;

let pay = hoursworked * payrate; //hrs*pay
let regularhours = regular * payrate;//40hr work week
let overtimehours = hoursworked - regular; //5 ot hr
let ot = payrate * overtime;//30*1.5
let overtimepay = overtimehours * ot;//5*1.5
let totalovertime = regularhours + overtimepay;//40 hr workweek + 5*1.5

if(hoursworked <= 40) {
    console.log(`your pay is $${pay}`);
}
else if(hoursworked > 40) {
    console.log(`your overtime pay is $${totalovertime}`);
}
