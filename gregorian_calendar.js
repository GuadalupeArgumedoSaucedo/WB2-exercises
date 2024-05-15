let year1 = 2024;

let leapyear = [2000, 2004, 2008, 2012, 2016, 2020, 2024];
let normyear = [];

if(leapyear.includes(year1)) {
    console.log(`${year1} is a leap year`);
}
else if(normyear) {
    console.log(`${year1} is NOT a leap year`);
}



// program to check leap year
function checkLeapYear(year1) {

    //three conditions to find out the leap year
    if ((0 == year1 % 4) && (0 != year1 % 100) || (0 == year1 % 400)) {
        console.log(year1 + ' is a leap year');
    } else {
        console.log(year1 + ' is not a leap year');
    }
}

// take input
const yearPrompt = parseInt(prompt('Enter a year:'));
checkLeapYear(yearPrompt);


//three conditions to find out the leap year
let year2 = 2000;

if ((0 == year2 % 4) && (0 != year2 % 100) || (0 == year2 % 400)) {
   console.log(year2 + ' is a leap year');
} else {
   console.log(year2 + ' is not a leap year');
}