/**Q22
   This program prints a right-aligned triangle star pattern using 
	 nested for loops. The number of lines (n) is provided by the user.
	 
	Problem Flow
	Get number of lines from user.
	Loop from 1 to n (line-by-line).
	For each line:
	Print n - i spaces.
	Print i stars.
	Go to the next line.

	Input / Output Example
	Input:
	How many Lines? 5
	Output:
    *
   **
   ***
  ****
*****

	 */

// Get number of lines from user
let n = parseInt(prompt("How many Lines?"));

// Build pyramid pattern
for (let i = 1; i <= n; i++) {
  let row = "";

  // Add spaces before stars
  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  // Add stars
  for (let star = 1; star <= 2 * i - 1; star++) {
    row += "*";
  }

  console.log(row);
}
