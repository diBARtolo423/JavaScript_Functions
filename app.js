// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) 
{
    if (count < 0)
    {
        console.log(`${count} is less then 0`);
        return;
    }

    for (let i = 0; i < count; i++)
    {
        if (i % 2 != 0)
        {
            console.log(i);
        }        
    }    
}

printOdds(10);

console.log(`Negative test`);
printOdds(-10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age)
{    
    if (userName == null)
    {
        console.log(`No userName entered.  Try again`);
        return;
    }

    if (age <= 0 | age == null)
    {
        console.log(`Incorrect age entered`);
        return;
    }

    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age < 16)
    {
        console.log(belowSixteen);
    }
    else
    {
        console.log(aboveSixteen);
    }    
}

checkAge(`Ross`, 33);
checkAge(`Bradley`, 6);
checkAge(null, 19);
checkAge(`Frank`, -6);


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function cartesianPlane(x, y)
{
    if (x < 0 && y > 0)
    {
        console.log(`(${x}, ${y}) is in Quadrant 2.`);
    }
    if (x > 0 && y > 0)
    {
        console.log(`(${x}, ${y}) is in Quadrant 1.`);
    }
    if (x < 0 && y < 0)
    {
        console.log(`(${x}, ${y}) is in Quadrant 3.`);
    }
    if (x > 0 && y < 0)
    {
        console.log(`(${x}, ${y}) is in Quadrant 4.`);
    }
    if (x == 0 && y == 0)
    {
        console.log(`(${x}, ${y}) is Middle.`);
    }
    if (x > 0 && y == 0)
    {
        console.log(`(${x}, ${y}) is on the X Axis.`);
    }
    if (x < 0 && y == 0)
    {
        console.log(`(${x}, ${y}) is on the X Axis.`);
    }
    if (x == 0 && y > 0)
    {
        console.log(`(${x}, ${y}) is on the Y Axis.`);
    }
    if (x == 0 && y < 0)
    {
        console.log(`(${x}, ${y}) is on the Y Axis.`);
    }
}

cartesianPlane(0, 0);
cartesianPlane(1, 1);
cartesianPlane(-1, 1);
cartesianPlane(-1, -1);
cartesianPlane(1, -1);
cartesianPlane(0, 1);
cartesianPlane(1, 0);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleType(x, y, z)
{
    if (!(x + y > z)  || !(x + z > y) || !(y + z > x))
    {
        console.log(`Not a triangle`);
        return;
    }
    if (x == y && x == z && y == z)
    {
        console.log(`Equilateral triangle`);
    }    
    else if (x == y || x == z || y == z)
    {
        console.log(`Isoceles triangle`);
    }
    else
    {
        console.log(`Scalene triangle`);
    }
}

triangleType(1, 1, 1);
triangleType(1, 2, 2);
triangleType(6, 2, 3);
triangleType(1, 4, 5);
triangleType(1, 2, 1);
triangleType(0, 0, 0);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlan(planLimit, day, usage)
{
    let dailyUseLimit = (planLimit / 30).toFixed(2);
    let currentDailyUsage = (usage / day).toFixed(2);
    let daysRemaining = 30 - day;
    let overage = ((30 * currentDailyUsage) - planLimit).toFixed(2);
    let dataRemaining = ((planLimit - usage) / daysRemaining).toFixed(2);

    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use: ${dailyUseLimit} GB/day`);

    if (currentDailyUsage > dailyUseLimit)
    {
        console.log(`You are Exceeding your average daily limit ${currentDailyUsage} GB/day,)
        continuing this high usage, you'll exceed your data plan by ${overage} GBs.`);
        console.log(`To stay below your data plan, use no more than ${dataRemaining} GBs/day`);
    }

    else if (currentDailyUsage < dailyUseLimit)
    {
        console.log(`You are under your average daily limit ${currentDailyUsage} GB/day,)
        continuing this low usage, you'll have excess your data plan by ${overage} GBs.`);
        console.log(`To stay below your data plan, use no more than ${dataRemaining} GBs/day`);
    }
    else
    {
        console.log(`You are under your even on daily limit ${currentDailyUsage} GB/day,)
        continuing this usage, you'll have just enough of your data plan by ${overage} GBs.`);
        console.log(`To stay at your data plan, use no more than ${dataRemaining} GBs/day`);
    }
}

console.log(`Data Over`);
dataPlan(100, 15, 56);
console.log();

console.log(`Data Under`);
dataPlan(100, 15, 40);
console.log();

console.log(`Data Even`);
dataPlan(100, 15, 50);
console.log();