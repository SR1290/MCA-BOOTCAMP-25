/** Q12
	 * This program reads 5 numbers (each between 1 and 30) from the user.
	 For each number, it prints a line with that many asterisks *, 
	 forming a simple bar chart or histogram.
	 
	 Problem Flow:
	Read 5 numbers from the user
	Loop through each number
	For each number:
	Print the number
	Print that many * using inner loop
	
	Sample Output:
	Input:
	Enter 5 Numbers in a same line: 
	3 7 2 6 1
	Output:
	3 ***
 	7 *******
 	2 **
 	6 ******
 	1 *
 	
	 */

// Program to print a bar chart of asterisks for 5 numbers (1 to 30)

// Prompt for input
let numbersInput = prompt("Enter 5 numbers (each between 1 and 30) separated by spaces:");

// Convert to array of numbers
let numbers = numbersInput.trim().split(/\s+/).map(Number);

// Validate input
if (numbers.length !== 5 || numbers.some(num => isNaN(num) || num < 1 || num > 30)) {
    alert("Please enter exactly 5 valid numbers between 1 and 30.");
} else {
    let output = "";

    for (let i = 0; i < numbers.length; i++) {
        let stars = "*".repeat(numbers[i]);
        output += `${numbers[i]} ${stars}\n`;
    }

    // Display result
    alert(output);
}

