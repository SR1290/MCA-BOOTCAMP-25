/** Q6
	 * This program allows the user to enter 3 test marks of a student, 
	 calculates the total and average, and displays the result.
	 
	Problem Flow:
	Get 3 marks from user
	Add marks → total
	Divide total by 3.0 → average
	Display total and average
	
	Input / Output Example:
	Input:
	Enter Mark 1: 80  
	Enter Mark 2: 75  
	Enter Mark 3: 85  
	Output:
	Total Marks   = 240  
	Average Marks = 80.0
	 */


    // Program to calculate Total and Average of 3 marks

// Prompt for marks
let mark1Input = prompt("Enter Mark 1:");
let mark2Input = prompt("Enter Mark 2:");
let mark3Input = prompt("Enter Mark 3:");

// Convert to numbers
let mark1 = parseFloat(mark1Input);
let mark2 = parseFloat(mark2Input);
let mark3 = parseFloat(mark3Input);

// Validate inputs
if (isNaN(mark1) || mark1 < 0 || 
    isNaN(mark2) || mark2 < 0 || 
    isNaN(mark3) || mark3 < 0) {
    alert("Please enter valid non-negative numbers for all marks.");
} else {
    // Calculate total and average
    let total = mark1 + mark2 + mark3;
    let average = total / 3.0;

    // Display result
    alert(`Total Marks   = ${total}\nAverage Marks = ${average.toFixed(1)}`);
}
