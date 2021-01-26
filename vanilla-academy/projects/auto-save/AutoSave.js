const AutoSave = (function() {
  "use strict";

  // Constructor
  const Constructor = function(formID) {
    // Variables
    this.form = document.querySelector(formID);
    this.formFields = {};

    const setField = function(id, value) {
      console.log(this);
      this.formFields[id] = value;
      localStorage.setItem(this.form.id, JSON.stringify(this.formFields));
    };

    const getFieldID = function(element) {
      if (element.id) return `${element.id}`;
      else if (element.name) return `${element.name}`;
      else return null;
    };

    const eventHandler = function(event) {
      const element = event.target;
      const id = getFieldID(element);
      console.log(id);
      setField(id, element.value);
    };

    if (this.form) {
      // Handle Field Changes
      this.form.addEventListener("input", eventHandler, false);

      // Handle Form Submit
      // form.addEventListener("submit", clearFields, false);

      // Load Fields from local storage on load
      //   fillFields();
    }
  };

  // Return the constructor
  return Constructor;
})();
