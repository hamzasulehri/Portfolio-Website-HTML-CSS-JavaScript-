const loginBtn = document.getElementById("loginBtn");
const authBox = document.getElementById("authBox");
const overlay = document.getElementById("overlay");

const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

// Open Login Popup
loginBtn.addEventListener("click", () => {
    authBox.classList.add("active");
    overlay.classList.add("active");
    authBox.style.display = "block";
    authBox.style.opacity = "1";
    authBox.style.visibility = "visible";
});

// Switch to Register
document.getElementById("showRegister").addEventListener("click", (e) => {
    e.preventDefault();

    loginForm.classList.remove("active");
    registerForm.classList.add("active");
});

// Switch to Login
document.getElementById("showLogin").addEventListener("click", (e) => {
    e.preventDefault();

    registerForm.classList.remove("active");
    loginForm.classList.add("active");
});

// Close when clicking overlay
overlay.addEventListener("click", () => {
    authBox.classList.remove("active");
    overlay.classList.remove("active");
    authBox.style.display = "none";
    authBox.style.opacity = "0";
    authBox.style.visibility = "hidden";
});