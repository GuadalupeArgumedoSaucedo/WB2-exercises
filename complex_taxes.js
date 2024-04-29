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
    console.log(`your annual pay with overtime is ${annualotpay}`);//annual gross pay
}

//tax rate
let singleincome = 24700;
let jointincome = null;


if ((singleincome < 12000)) {        
    console.log(`your tax rate for single filers is ${five} %`);             
}
else if ((singleincome >= 12000) && (singleincome < 24999.99)) {       
    console.log(`your tax rate for single filers is ${ten} %`); //tax rate for single filers              
}
else if ((singleincome >= 25000) && (singleincome < 75999.99)) {        
    console.log(`your tax rate for single filers is ${fifteeny} %`);             
}
else if ((singleincome > 75000)) {        
    console.log(`your tax rate for single filers is ${twenty} %`);             
}

if ((jointincome < 12000)) {        
    console.log(`your tax rate for joint filers is ${zero} %`); //join income null             
}
else if ((jointincome >= 12000) && (jointincome < 24999.99)) {        
    console.log(`your tax rate for joint filers is ${six} %`);             
}
else if ((jointincome >= 25000) && (jointincome < 75999.99)) {        
    console.log(`your tax rate for joint filers is ${eleven} %`);             
}
else if ((jointincome> 75000)) {        
    console.log(`your tax rate for joint filers is ${twenty} %`);             
}


console.log(`You worked ${hoursworked} hours this period.`)//hrs this period
console.log(`Because you earn ${payrate} per hour, your gross pay is ${totalovertime}`)//earn per hr & gross pay


let s = "single";
let j = null;

if ((s)) {        
    console.log(`Your filing status is ${s}`); //filing single             
}
else if ((j)) {        
    console.log(`Your filing status is ${j}`);  
}




console.log(`Your tax withholdings this period is ${null}`)//
console.log(`Your net pay is ${null}`)//
