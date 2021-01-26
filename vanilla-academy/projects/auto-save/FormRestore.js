const FormRestore = (function() {
  let form;
  let formFields;

  const getPrefix = () => {
    return `${form.id}-`;
  };

  // Private Methods
  const getFieldID = function(element) {
    if (element.id) return `${getPrefix()}${element.id}`;
    else if (element.name) return `${getPrefix()}${element.name}`;
    else return null;
  };

  // Private Methods
  const getFieldName = field => {
    const fieldId = getPrefix().length;
    //console.log(fieldId);
    return field.slice(fieldId);
  };

  const getField = fieldID => {
    const fieldName = getFieldName(fieldID);
    // console.log(fieldName);

    // Find field by ID
    const field = form.querySelector(`#${fieldName},[name=${fieldName}]`);
    if (field) return field;

    return null;
  };

  /**
   * Set a value of the field and save to localStorage
   * @param {String} id ID of the field to save
   * @param {String} value Value of the field to save
   */
  const setField = (id, value) => {
    formFields[id] = value;
    localStorage.setItem(form.id, JSON.stringify(formFields));
  };

  /**
   * Clear the localStorage on Form Submit
   */
  const clearFields = () => {
    console.log(form.id);
    localStorage.removeItem(form.id);
  };

  /**
   * Loop through each field in Form and fill data based on localStorage
   */
  const fillFields = () => {
    
    if (localStorage.getItem(form.id)) {
      formFields = JSON.parse(localStorage.getItem(form.id));
      // console.log(`Saved fields: {formFields}`);
    }
    // console.log(formFields);
    const entries = Object.entries(formFields);
    for (const [id, value] of entries) {
      const field = getField(id);
      // console.log(field);
      if (field) {
        field.value = value;
      }
    }
  };

  /**
   * Event Handler for the changing of the fields
   * @param {Event} event
   */
  const eventHandler = event => {
    const element = event.target;

    const id = getFieldID(element);
    console.log(id);
    setField(id, element.value);
  };

  // Constructor
  const Constructor = function(formID) {
    // Variables
    form = document.querySelector(formID);
    formFields = new Object();
    // console.log(form);
    if (form) {
      // Handle Field Changes
      form.addEventListener("input", eventHandler, false);

      // Handle Form Submit
      form.addEventListener("submit", clearFields, false);

      // Load Fields from local storage on load
      fillFields();
    }
  };

  // Return the constructor
  return Constructor;
})();
