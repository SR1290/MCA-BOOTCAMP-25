document.getElementById("biodataform").addEventListener("submit", function(e) 
{
    e.preventDefault();


    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value



    // Display Biodata in Table
    document.getElementById("output").innerHTML = `
        <h2>Biodata</h2>
        <table border="1" cellpadding="8" cellspacing="0" style="width:100%; border-collapse: collapse;">
            <tr><th>Field</th><th>Details</th></tr>
            <tr><td>Name</td><td>${name}</td></tr>
            <tr><td>Date of Birth</td><td>${dob}</td></tr>
            <tr><td>Gender</td><td>${gender}</td></tr>
            <tr><td>Email</td><td>${email}</td></tr>
            <tr><td>Phone</td><td>${phone}</td></tr>
            <tr><td>Address</td><td>${address}</td></tr>
            <tr><td>Education</td><td>${education}</td></tr>
            <tr><td>Skills</td><td>${skills}</td></tr>
        </table>
    `;
};

