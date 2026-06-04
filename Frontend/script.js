const loginBtn = document.getElementById("loginBtn");
const authBox = document.getElementById("authBox");

const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

document.addEventListener("click", (e) => {

    if(e.target.id === "loginBtn"){
        authBox.style.display = "block";
    }

    if(e.target.id === "showRegister"){
        e.preventDefault();

        loginForm.classList.remove("active");
        registerForm.classList.add("active");
    }

    if(e.target.id === "showLogin"){
        e.preventDefault();

        registerForm.classList.remove("active");
        loginForm.classList.add("active");
    }

    if(
        authBox.style.display === "block" &&
        !authBox.contains(e.target) &&
        e.target.id !== "loginBtn"
    ){
        authBox.style.display = "none";
    }

});