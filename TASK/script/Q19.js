/** Q19
	 * This program reads a set of numbers from the user and calculates 
	 the cumulative product, which means multiplying all the numbers 
	 together one by one.
	 
	 Code Flow 
	Get number count n
	Use for loop to input numbers
	Multiply each number with product
	Print final result
	
	Test Data
	Input:
	6.2, 12.3, 5.0, 18.8, 7.1, 12.8
	Output:
	Cumulative Total = 514537.165312


	 */

    // Program to calculate the cumulative product of numbers

// Ask the user for how many numbers they want to enter
let n = parseInt(prompt("Enter how many numbers you want to input:"), 10);

// Initialize product
let product = 1;

// Loop to read numbers and calculate cumulative product
for (let i = 1; i <= n; i++) {
    let num = parseFloat(prompt(`Enter number ${i}:`));
    product *= num;
}

// Display the cumulative product
alert(`Cumulative Total = ${product}`);
