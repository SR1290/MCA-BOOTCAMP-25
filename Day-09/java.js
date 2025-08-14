function rollDice() {
    // Generate random numbers between 1 and 6
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    // Change dice images based on random numbers
    document.getElementById("dice1").src = "images/dice" + randomNumber1 + ".png";
    document.getElementById("dice2").src = "images/dice" + randomNumber2 + ".png";
    
    // Decide the winner
    if (randomNumber1 > randomNumber2) {
        document.getElementById("result").innerHTML = "🏆 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.getElementById("result").innerHTML = "Player 2 Wins! 🏆";
    } else {
        document.getElementById("result").innerHTML = "It's a Draw!";
    }
    }
    // Add event listener to button
    document.getElementById("rollBtn").addEventListener("click", rollDice);
