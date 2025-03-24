// Function to handle user registration
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const contact = document.getElementById("contact").value;
            const address = document.getElementById("address").value;

            const user = { name, email, contact, address };

            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

            alert("User registered successfully!");
            form.reset();
        });
    }

    // Function to display registered users
    const usersTable = document.getElementById("usersTable");
    if (usersTable) {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.forEach(user => {
            let row = usersTable.insertRow();
            row.insertCell(0).textContent = user.name;
            row.insertCell(1).textContent = user.email;
            row.insertCell(2).textContent = user.contact;
            row.insertCell(3).textContent = user.address;
        });
    }
});
