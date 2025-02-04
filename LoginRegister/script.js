function toggleForm() {
    let loginForm = document.getElementById("loginForm");
    let registerForm = document.getElementById("registerForm");
    if (loginForm.style.display === "none") {
        loginForm.style.display = "flex";
        registerForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "flex";
    }
}

function togglePassword(id, element) {
    let passwordInput = document.getElementById(id);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        element.textContent = "🫣";
    } else {
        passwordInput.type = "password";
        element.textContent = "😶";
    }
}