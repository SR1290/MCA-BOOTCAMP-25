   /** Q17
	 *  This program checks the temperature value (temp) and determines 
	 the physical state of water:
		If temp < 0 → "ICE"
		If temp is between 0 and 100 (inclusive) → "WATER"
		If temp > 100 → "STEAM"
		
		Flow Summary:
		Get user input for temperature
		Use if-else to decide the state of water
		Display the result to the user
		
		Sample I/O:
		Input:
		Enter the water temperature: 120
		Output:
		Water status is STEAM for the Temperature 120.00

	 */

        // Program to determine the physical state of water based on temperature

// Prompt user for temperature
let temp = parseFloat(prompt("Enter the water temperature:"));

// Variable to store the state
let state;

// Determine the state of water
if (temp < 0) {
    state = "ICE";
} else if (temp <= 100) {
    state = "WATER";
} else {
    state = "STEAM";
}

// Display the result
alert(`Water status is ${state} for the Temperature ${temp.toFixed(2)}`);
