// Elements
const showPassword = document.querySelector("#show-password");
const password = document.querySelector("#password");

// Toggle Password Field
const togglePassword = () => {
  password.type = showPassword.checked ? "text" : "password";
  
};

// Listen for checkbox click
showPassword.addEventListener("click", togglePassword, false);
