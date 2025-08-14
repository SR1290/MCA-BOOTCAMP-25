/** Q3
	 * This program calculates Compound Interest using the formula:
 		F = P × (1 + i)ⁿ
 		Where:
			P = Principal amount
			i = Rate/100
			n = Number of years
 			Here, F is the final amount (principal + interest)
	
		 Problem Flow:
		Input P, R, and N from user
		Calculate i = R / 100
		Use formula F = P × (1 + i)^N
		Display the final compound amount
		
		Input / Output Example:
		Input:
		Enter Principal Value: 10000  
		Enter Rate of Interest: 10  
		Enter No. of Years: 2
		Output:
		Compound Interest 12100.00
*/

// Program to calculate Compound Interest
// Formula: F = P × (1 + i)^n
// Where i = R / 100

// Prompt for inputs
let principalInput = prompt("Enter Principal Value:");
let rateInput = prompt("Enter Rate of Interest:");
let yearsInput = prompt("Enter Number of Years:");

// Convert inputs to numbers
let P = parseFloat(principalInput);
let R = parseFloat(rateInput);
let N = parseFloat(yearsInput);

// Validate input
if (isNaN(P) || P <= 0 || isNaN(R) || R <= 0 || isNaN(N) || N <= 0) {
    alert("Please enter valid positive numbers for Principal, Rate, and Years.");
} else {
    // Calculate interest rate in decimal
    let i = R / 100;

    // Calculate final amount
    let F = P * Math.pow(1 + i, N);

    // Display result
    alert(`Compound Interest = ${F.toFixed(2)}`);
}
