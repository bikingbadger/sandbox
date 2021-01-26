// Elements
const showPasswords = document.querySelector("#show-passwords");
const passwordFields = Array.prototype.slice.call(
  document.querySelectorAll("[type='password']"),
);

// Toggle Password Field
const togglePasswordFields = () => {
  passwordFields.forEach(password => {
    password.type = showPasswords.checked ? "text" : "password";
  });
};

// If page is refreshed and the checkbox is already refreshed
// change the fields to text in anyway
if (showPasswords.checked) {
  passwordFields.forEach(password => {
    password.type = "text";
  });
}

// Listen for checkbox click
showPasswords.addEventListener("click", togglePasswordFields, false);
