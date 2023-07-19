// The Logical AND operator: &&
// Used to confirm if multiple comparisons will return true.

// Tasked with coming up with some code that will check if the currentTime variable is between 9am and 5pm.
// The code needs to console.log true if currentTime > 9 and if currentTime < 17

// Set the currentTime variable and assign the value of 10 to it.
var currentTime = 10;
// Use the && logical operator to join the two comparisons
console.log(currentTime > 9 && currentTime < 17); // Returns True


// The Logical OR operator: ||
// Used when you want to check if at least one of the given comparisons evaluates to true.

//Tasked with writing a program which will return true if the value of currentTime variable is not between 9 and 17.

// Set the currentTime variable and assign the value of 7 to it.
var currentTime = 7;
// Use the || operator to join the two comparisons
console.log(currentTime < 9 || currentTime > 17); // Returns true