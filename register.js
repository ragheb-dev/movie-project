
// =====================
// Get HTML Elements
// =====================

const registerForm = document.getElementById("registerForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");


// =====================
// Local Storage Functions
// =====================

function setData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getData(key) {
    return JSON.parse(localStorage.getItem(key));
}


// =====================
// Regular Expressions
// =====================

const namePattern = /^[A-Za-z\s-]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// =====================
// Register Form
// =====================

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // =====================
    // Check Empty Fields
    // =====================

    if (
        firstName.value.trim() === "" ||
        lastName.value.trim() === "" ||
        email.value.trim() === "" ||
        password.value.trim() === "" ||
        confirmPassword.value.trim() === ""
    ) {

        alert("Please fill in all fields.");
        return;

    }


    // =====================
    // Check First Name
    // =====================

    if (!namePattern.test(firstName.value.trim())) {

        alert("First Name must contain letters only.");
        return;

    }


    // =====================
    // Check Last Name
    // =====================

    if (!namePattern.test(lastName.value.trim())) {

        alert("Last Name must contain letters only.");
        return;

    }


    // =====================
    // Check Email
    // =====================

    if (!emailPattern.test(email.value.trim())) {

        alert("Please enter a valid email.");
        return;

    }


    // =====================
    // Check Password Length
    // =====================

    if (password.value.length < 8) {

        alert("Password must be at least 8 characters.");
        return;

    }


    // =====================
    // Check Confirm Password
    // =====================

    if (password.value !== confirmPassword.value) {

        alert("Passwords do not match.");
        return;

    }


    // =====================
    // Create User Object
    // =====================

    const user = {

        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        email: email.value.trim(),
        password: password.value.trim()

    };


    // =====================
    // Get Users
    // =====================

    let users = getData("users");

    if (users === null) {

        users = [];

    }


    // =====================
    // Check Email Exists
    // =====================

    let emailExists = users.some(function (user) {

        return user.email === email.value.trim();

    });


    if (emailExists) {

        alert("Email already exists ❌");
        return;

    }


    // =====================
    // Save User
    // =====================

    users.push(user);

    setData("users", users);


    // =====================
    // Registration Success
    // =====================

    alert("Registration Successful! ✅");

    registerForm.reset();

});

