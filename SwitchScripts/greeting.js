let time = 11

let morning = 0-9;
let day = 10-16;
let evening = 17-23;

if(morning) {
    console.log(`Good morning!`);
}
else if(day) {
    console.log(`Good day!`);
}
else if(evening) {
    console.log(`Good evening!`);
}

// Get the current hour using the Date object
let currentHour = new Date().getHours();

// Remsey example
/*
if (currentHour < 10) {
    greeting = "Good morning!";
} else if (currentHour >= 10 && currentHour < 17) {
    greeting = "Good day!";
} else {
    greeting = "Good evening!";
}

if (age === 10 || age === 11) {
    console.log("You are 10 or 11");
}
*/

