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


if(hoursworked <= 40) {
    console.log(`your annual pay is ${annualfullpay}`);
}
else if(hoursworked > 40) {
    console.log(`your annual pay with overtime is ${annualotpay}`);
}

//tax rate
let singleincome = 24700;
let jointincome = 24700;


if ((singleincome < 12000)) {        
    console.log(`your tax rate for single filers is 5 %`);             
}
else if ((singleincome >= 12000) && (singleincome < 24999.99)) {        
    console.log(`your tax rate for single filers is 10 %`);             
}
else if ((singleincome >= 25000) && (singleincome < 75999.99)) {        
    console.log(`your tax rate for single filers is 15 %`);             
}
else if ((singleincome > 75000)) {        
    console.log(`your tax rate for single filers is 20 %`);             
}

if ((jointincome < 12000)) {        
    console.log(`your tax rate for joint filers is 0 %`);             
}
else if ((jointincome >= 12000) && (jointincome < 24999.99)) {        
    console.log(`your tax rate for joint filers is 6 %`);             
}
else if ((jointincome >= 25000) && (jointincome < 75999.99)) {        
    console.log(`your tax rate for joint filers is 11 %`);             
}
else if ((jointincome> 75000)) {        
    console.log(`your tax rate for joint filers is 20 %`);             
}

console.log(`You worked ${hoursworked} hours this period.`)//
console.log(`Because you earn ${payrate} per hour, your gross pay is ${totalovertime}`)//

console.log(`Your filing status is ${year} `)//
console.log(`Your tax withholdings this period is ${year}`)//
console.log(`Your net pay is ${year}`)//