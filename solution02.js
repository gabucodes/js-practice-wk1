function checkSpeed() {
    let speed = parseFloat(prompt("Enter the speed of the car (in km/s):"));

    if (isNaN(speed) || speed < 0) {
        return "Invalid input! Speed must be a positive number.";
    }

    const speedLimit = 70;
    const demeritPointsPer5Km = 1;
    const maxDemeritPoints = 12;

    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5);

        if (demeritPoints > maxDemeritPoints) {
            return "License suspended";
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}

// Call the function and display the result
const result = checkSpeed();
console.log(result);