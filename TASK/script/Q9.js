/** Q9
	 * This program finds the sum of even numbers between 2 and 30 (inclusive).
	 	
	 Problem Flow:
	Start loop from 2 to 30
	Check if number is even (i % 2 == 0)
	Add to sum
	Print final sum
	
	 Input / Output Example:
	Output:
	Sum of even numbers from 2 to 30 = 240
	(Even numbers: 2 + 4 + 6 + ... + 30 = 240)
	 */

    // Program to find the sum of even numbers between 2 and 30

let startInput = prompt("Enter starting number (default 2):", "2");
let endInput = prompt("Enter ending number (default 30):", "30");

// Convert to integers
let start = parseInt(startInput);
let end = parseInt(endInput);

// Validate input
if (isNaN(start) || isNaN(end) || start < 2 || end < start) {
    alert("Please enter valid integers, with start >= 2 and end >= start.");
} else {
    let sum = 0;
    let evens = [];

    // Loop to sum even numbers
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
            evens.push(i);
        }
    }

    // Display result
    alert(`Sum of even numbers from ${start} to ${end} = ${sum}\n(Even numbers: ${evens.join(" + ")} = ${sum})`);
}
