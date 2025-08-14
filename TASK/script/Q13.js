/** Q13
	 * This program first reads how many numbers the user wants to enter 
	 (N). Then it reads those N numbers and finds the smallest among 
	 them.
	 
	 Problem Flow:
	Get total number of inputs N
	Read first number as smallest
	Loop remaining N-1 times
	Compare each number with smallest
	Update smallest if a smaller number is found
	Print final smallest number
	
	Sample Input / Output:
	Input:
	Enter how many numbers you want to input: 5
	Enter number 1: 22
	Enter number 2: 18
	Enter number 3: 31
	Enter number 4: 6
	Enter number 5: 27
	Output:
	The smallest number is: 6

	 */

    // Program to find the smallest number among N inputs

// Prompt for total count of numbers
let nInput = prompt("Enter how many numbers you want to input:");
let n = parseInt(nInput);

// Validate N
if (isNaN(n) || n <= 0) {
    alert("Please enter a valid positive integer for the number of inputs.");
} else {
    // Read first number
    let firstInput = prompt("Enter number 1:");
    let smallest = parseFloat(firstInput);

    if (isNaN(smallest)) {
        alert("Invalid number entered. Program cancelled.");
    } else {
        // Loop for remaining N-1 numbers
        for (let i = 2; i <= n; i++) {
            let numInput = prompt(`Enter number ${i}:`);
            let num = parseFloat(numInput);

            if (isNaN(num)) {
                alert("Invalid number entered. Program cancelled.");
                break;
            }

            if (num < smallest) {
                smallest = num;
            }
        }

        // Display result
        alert(`The smallest number is: ${smallest}`);
    }
}
