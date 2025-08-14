
// Program to convert Fahrenheit to Celsius
// Formula: C = (5 / 9) × (F - 32)

// Prompt for input
let fahrenheitInput = prompt("Enter temperature in Fahrenheit:");

// Convert to number
let F = parseFloat(fahrenheitInput);

// Validate input
if (isNaN(F)) {
    alert("Please enter a valid number for Fahrenheit temperature.");
} else {
    // Apply formula
    let C = (5 / 9) * (F - 32);

    // Display result
    alert(`${F.toFixed(6)} deg F is ${C.toFixed(6)} deg C`);
}
