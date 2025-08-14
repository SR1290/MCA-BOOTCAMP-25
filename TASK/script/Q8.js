/** Q8
	 * This program calculates the sum of the first n odd integers 
	 (Example: 1 + 3 + 5 + ... + (2n - 1)).
	 
	 Problem Flow:
	Input n from user
	Loop from 1 to (2n−1) in steps of 2
	Accumulate the sum
	Print the result
	
	Input / Output Example:
	Input:
	Enter how many odd numbers to sum: 5
	Output:
	Sum of first 5 odd numbers is 25
	(1 + 3 + 5 + 7 + 9 = 25)

	 */


// Program to calculate the sum of the first n odd integers

// Prompt for input
let nInput = prompt("Enter how many odd numbers to sum:");

// Convert to number
let n = parseInt(nInput);

// Validate input
if (isNaN(n) || n <= 0) {
    alert("Please enter a valid positive integer for n.");
} else {
    let sum = 0;
    let sequence = [];

    // Loop to sum first n odd numbers
    for (let i = 1; i <= (2 * n - 1); i += 2) {
        sum += i;
        sequence.push(i);
    }

    // Display result
    alert(`Sum of first ${n} odd numbers is ${sum}\n(${sequence.join(" + ")} = ${sum})`);
}
