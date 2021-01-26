// Elements
let currentForm,
  passwordFields,
  checkbox = Element;

// Toggle Password Field
const togglePasswordFields = currentCheckbox => {
  currentForm = currentCheckbox.closest("form");
  passwordFields = Array.prototype.slice.call(
    currentForm.getElementsByClassName("inputPassword"),
  );
  passwordFields.forEach(password => {
    password.type = currentCheckbox.checked ? "text" : "password";
  });
};

// Check the click event for a checkbox
const clickChecked = event => {
  if (event.target.matches('[name="show-passwords"]')) {
    togglePasswordFields(event.target);
  }
};

// Listen for checkbox click
window.addEventListener("click", clickChecked, true);

togglePasswordFields(document.querySelector("#show-password"));
togglePasswordFields(document.querySelector("#show-passwords"));
