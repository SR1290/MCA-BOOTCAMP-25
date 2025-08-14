/** Q2
	 * Write a Java program to calculate Simple Interest using the formula:
 		SI = (P × N × R) / 100
 		Where:
		P = Principal amount
		N = Number of years
		R = Rate of interest
		
		Problem Flow:
		User inputs:
			Principal (P)
			Rate (R)
			Years (N)
		Program calculates:
			SI = (P × N × R) / 100
		Output displays the Simple Interest value.
		

        Input / Output Example:
		Input:
		Enter Principal Amount: 10000  
		Enter Rate of Interest: 5  
		Enter No. of Years: 2
		Output:
		Simple Interest = 1000.00
*/


// Program to calculate Simple Interest
// Formula: SI = (P × N × R) / 100

// Prompt for inputs
let principalInput = prompt("Enter Principal Amount:");
let rateInput = prompt("Enter Rate of Interest:");
let yearsInput = prompt("Enter Number of Years:");

// Convert to numbers
let P = parseFloat(principalInput);
let R = parseFloat(rateInput);
let N = parseFloat(yearsInput);

// Validate input
if (isNaN(P) || P <= 0 || isNaN(R) || R <= 0 || isNaN(N) || N <= 0) {
    alert("Please enter valid positive numbers for Principal, Rate, and Years.");
} else {
    // Calculate simple interest
    let SI = (P * N * R) / 100;

    // Display result
    alert(`Simple Interest = ${SI.toFixed(2)}`);
}
