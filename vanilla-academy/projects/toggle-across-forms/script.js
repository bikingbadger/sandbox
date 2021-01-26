// Elements
const showPassword = document.querySelector("#show-password");
const showPasswords = document.querySelector("#show-passwords");

// Username password
const usernamePassword = [document.querySelector("#password")];

// Password Fields that should only be the bottom form
// Remove the single username password field from the other password fields
let passwordFields = Array.prototype.slice.call(
  document.querySelectorAll("[type='password']"),
);
passwordFields.forEach((password, index) => {
  password.id === "password" ? passwordFields.splice(index, 1) : 0;
});

// Toggle Password Field
const togglePasswordFields = single => {
  // Set the fields and the checkbox for selection
  const toggleFields = single ? usernamePassword : passwordFields;
  const toggleCheckBox = single ? showPassword : showPasswords;

  // Loop through each element and toggle
  toggleFields.forEach(password => {
    password.type = toggleCheckBox.checked ? "text" : "password";
  });
};

// Check the click event for a checkbox
const clickChecked = event => {
  if (event.target.matches("#show-password")) {
    togglePasswordFields(true);
  } else if (event.target.matches("#show-passwords")) {
    togglePasswordFields(false);
  }
};

// Listen for checkbox click
window.addEventListener("click", clickChecked, true);

togglePasswordFields(true);
togglePasswordFields(false);
