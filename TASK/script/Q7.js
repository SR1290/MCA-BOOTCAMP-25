/** Q7
	 * This program reads a five-letter word from the user and encodes 
	 it by subtracting 1 from the ASCII value of each character. 
	 It then prints the newly encoded word.
	 
	 Problem Flow:
	Get 5-letter word input
	Loop each character → subtract 1 from ASCII
	Build new string with changed characters
	Print encoded result
	
	Input / Output Example:
	Input:
	Enter a Five letter word: white
	Output:
	Encoded Word: vghsd
	 */

// Program to encode a five-letter word by subtracting 1 from ASCII of each char

// Prompt for a 5-letter word
let word = prompt("Enter a five-letter word:");

// Validate input
if (!word || word.length !== 5 || !/^[a-zA-Z]+$/.test(word)) {
    alert("Please enter exactly five letters (A-Z or a-z) without spaces or numbers.");
} else {
    let encodedWord = "";

    // Loop through each character
    for (let i = 0; i < word.length; i++) {
        // Get ASCII code, subtract 1, and convert back to character
        let newChar = String.fromCharCode(word.charCodeAt(i) - 1);
        encodedWord += newChar;
    }

    // Display encoded word
    alert(`Encoded Word: ${encodedWord}`);
}
