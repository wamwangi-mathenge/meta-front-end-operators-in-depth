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

// The Logical NOT operator: !
// The ! operator flips the evaluated boolean value from true to false and from false to true.

var petHungry = true;
console.log(petHungry);
console.log("Pet is hungry:", petHungry);
console.log("Pet is hungry:", !petHungry);
console.log(petHungry)
console.log(!petHungry)


// You can permanently change the value stored in the petHungry variable from true to false
console.log(petHungry);

petHungry = !petHungry;
console.log(petHungry)


// The Modulus Operator: %
// The modulus operator returns the remainder of division.

// A small restaurant that has 4 chairs per table, and a total of 5 tables, suddenly receives 22 guests
// How many guests will not be able to sit down in the restaurant

console.log(22 % 5);


// The + operator on strings and numbers
// The + operator can be used with number data type to add those values together.
// The + operator can also be used to join string data type together.

console.log("inter" + "milan");
console.log("manchester" + "city");

// If the + operator is used to join strings, it is referred to as the CONCATENATION operator.
// It's used to CONCATENATE strings

// When used with numbers, the + operator is the ADDITION operator.


// Combining strings and numbers using the + operator

console.log(25 + " million dollars");
console.log(120 + " billion shillings")


// The addition assignment operator
// Used when one wants to accumulate the values stored in a variable

// Counting the number of overtime hours worked in a week
var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri)


// using the addition assignment operator
var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;

console.log(overtime);


// The concatenation assignment operator

var longString = "";
longString += "Once ";
longString += "upon ";
longString += "a ";
longString += "time ";
longString += "...";
console.log(longString);
