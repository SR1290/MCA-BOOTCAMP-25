let maritalStatus = console.log(("Enter marital status (married/unmarried):").trim().toLowerCase());
if (maritalStatus === "unmarried") {
    // Ask gender
    let gender = console.log(("Enter gender (male/female):").trim().toLowerCase());
        if (gender === "male" || gender === "female") {
        // Ask age only if gender is valid
        let age = parseInt("Enter your age:"), 10;
       

        if (gender === "male" && age > 30) {
            alert("You are eligible for insurance.");
        } 
        else if (gender === "female" && age > 25) {
            alert("You are eligible for insurance.");
        } 
        else {
            alert("You are NOT eligible for insurance.");
        }
    } 
    else {
        alert("Invalid gender entered.");
    }
} 
else if (maritalStatus === "married") {
    alert("You are eligible for insurance.");
} 
else {
    alert("Invalid marital status entered.");
}
