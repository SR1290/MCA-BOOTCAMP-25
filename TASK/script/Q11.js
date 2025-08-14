   /** Q11
	 * This program reads a number n from the user and prints the 
	 factorial of numbers from 1 to n in a table format.
	 
	 Problem Flow:
	Read n from user
	Start fact = 1
	Loop from 1 to n
	Multiply fact *= i
	Print each number with its factorial
	
	Sample Output:
	Input:
	Enter the N value: 5

	Output:
	N   |   Factorial
	--------------------
  	1  |            1
  	2  |            2
  	3  |            6
  	4  |           24
  	5  |          120
	 */
    
    // Program to print factorials from 1 to n

// Prompt for input
let nInput = prompt("Enter the N value:");

// Convert to number
let n = parseInt(nInput);

// Validate input
if (isNaN(n) || n <= 0) {
    alert("Please enter a valid positive integer.");
} else {
    let fact = 1;
    let output = "N   |   Factorial\n--------------------\n";

    for (let i = 1; i <= n; i++) {
        fact *= i;
        output += `${i}   |   ${fact}\n`;
    }

    // Display factorial table
    alert(output);
}
