let year = 2024;

let leapyear = [2000, 2004, 2008, 2012, 2016, 2020, 2024];
let normyear = [];

if(leapyear) {
    console.log(`${year} is a leap year`);
}
else if(normyear) {
    console.log(`${year} is NOT a leap year`);
}



// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);


//three conditions to find out the leap year
let year = 2000;

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
   console.log(year + ' is a leap year');
} else {
   console.log(year + ' is not a leap year');
}