// =====================
// Get HTML Elements
// =====================

const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");


// =====================
// Login Form
// =====================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // =====================
    // Check Empty Fields
    // =====================

    if (
        email.value.trim() === "" ||
        password.value.trim() === ""
    ) {

        alert("Please fill in all fields.");
        return;

    }


    // =====================
    // Get Users
    // =====================

    let users = getData("users");


    // =====================
    // Check User
    // =====================

    let currentUser = users.find(function (user) {

        return (
            user.email === email.value.trim() &&
            user.password === password.value.trim()
        );

    });


    // =====================
    // Login Result
    // =====================

    if (currentUser) {

        setData("currentUser", currentUser);

        alert("Login Successful! ✅");

        window.location.href = "Home-page.html";

    } else {

        alert("Invalid email or password ❌");

    }

});