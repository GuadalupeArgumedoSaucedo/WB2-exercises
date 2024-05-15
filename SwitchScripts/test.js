function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 !== 0) {
        return true;
    } else if (year % 400 !== 0) {
        return false;
    } else {
        return true;
    }
}

// Testing the function with different years
console.log("1900: " + isLeapYear(1900));
console.log("1950: " + isLeapYear(1950));
console.log("1999: " + isLeapYear(1999));
console.log("2000: " + isLeapYear(2000));
console.log("2001: " + isLeapYear(2001));
console.log("2012: " + isLeapYear(2012));

