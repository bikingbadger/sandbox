'use strict';

//
// Variables
//

var storageID = 'form-autosave';

//
// Methods
//

/**
 * Get an ID for a field
 * @param  {Node}   field The field
 * @return {String}       The ID
 */
var getID = function(field) {
  if (field.id.length > 0) {
    return field.id;
  }

  if (field.name.length > 0) {
    return field.name;
  }

  return null;
};

/**
 * Load saved form data from localStorage
 */
var loadData = function() {
  // Get localStorage data
  var saved = localStorage.getItem(storageID);
  if (!saved) return;
  saved = JSON.parse(saved);

  // Get all of the form fields
  var fields = document.querySelectorAll(
    '#save-me input, #save-me textarea, #save-me select'
  );

  // Loop through each field and load any saved data in localStorage
  Array.prototype.slice.call(fields).forEach(function(field) {
    console.log(field);
    // If the field has no usable ID, skip it
    var id = getID(field);
    if (!id) return;

    // If there's no saved data in localStorage, skip it
    if (!saved[id]) return;

    // Set the field value to the saved data in localStorage
    if (field.type === 'checkbox') {
      field.checked = saved[id];
    } else if (field.type === 'radio') {
      if (saved[id] === field.value) {
        field.checked = true;
      }
    } else {
      field.value = saved[id];
    }
  });
};

/**
 * Handle input events
 * @param  {Event} event The event object
 */
var inputHandler = function(event) {
  // Only run for fields in the #save-me form
  const field = event.target;
  if (!field.closest('#save-me')) return;
  console.log(field.type, field.value, field.checked);
  // Get an ID for the field
  var id = getID(field);
  if (!id) return;

  // Get existing data from localStorage
  var saved = localStorage.getItem(storageID);
  saved = saved ? JSON.parse(saved) : {};

  // Add the field to the localStorage object
  if (field.type === 'checkbox') {
    fieldValue = field.checked;
  } else {
    fieldValue = field.value;
  }
  saved[id] = fieldValue;

  // Save the object back to localStorage
  localStorage.setItem(storageID, JSON.stringify(saved));
};

/**
 * Handle submit events
 * @param  {Event} event The event object
 */
var submitHandler = function(event) {
  // Only run for the #save-me form
  if (event.target.id !== 'save-me') return;

  // Clear saved data
  localStorage.removeItem(storageID);
};

//
// Inits & Event Listeners
//

// Load saved data from storage
loadData();

// Listen for input events
document.addEventListener('input', inputHandler, false);

// Listen for submit events
document.addEventListener('submit', submitHandler, false);
