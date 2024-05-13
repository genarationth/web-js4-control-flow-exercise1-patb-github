const dayNumber = parseInt(process.argv[2]);

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

if (isNaN(dayNumber)) console.log("Input must be a number");
else if (dayNumber < 0 || dayNumber > 6) console.log("Invalid day number");
else console.log(days[dayNumber]);
