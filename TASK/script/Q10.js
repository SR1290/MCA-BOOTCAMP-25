  /** Q10
	 * This program calculates and prints the product of odd numbers from 1 to 15.
		(Odd numbers: 1, 3, 5, 7, ..., 15)
		
		Problem Flow:
		Start from 1 to 15
		Increment by 2 to get odd numbers
		Multiply all odd numbers
		Print the final product
		
		Input / Output Example:
		Output:
		Product of odd numbers from 1 to 15 = 2027025
		(Odd numbers: 1 × 3 × 5 × 7 × 9 × 11 × 13 × 15 = 2027025)

	 */

        // Program to calculate the product of odd numbers from 1 to 15

// Prompt to confirm running the program
let proceed = prompt("This will calculate the product of odd numbers from 1 to 15. Type 'yes' to continue:").trim().toLowerCase();

if (proceed === "yes") {
    let product = 1;
    let odds = [];

    for (let i = 1; i <= 15; i += 2) {
        product *= i;
        odds.push(i);
    }

    alert(`Product of odd numbers from 1 to 15 = ${product}\n(Odd numbers: ${odds.join(" × ")} = ${product})`);
} else {
    alert("Program cancelled.");
}
