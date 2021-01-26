/**
 * hmhu aka Help Me Help U
 * A helper function to make your life a little easier
 */
var hmhu = (function() {
  //
  // Variables
  //
  // Holds our public methods
  var methods = {};

  //
  // Methods
  //

  /**
   * Convert a NodeList to an array.
   * @param {NodeList} nodeList Node list that should be converted to an array
   * @return {Array} Converted array
   */
  methods.node2Array = nodeList => {
    return Array.prototype.slice.call(nodeList);
  };

  /** Get the first matching element in the DOM.
   * @param {String} searchString String to search
   * @return {Element} First element found for the
   */

  methods.fistElement = searchString => {
    console.log(searchString);
    return document.querySelector(searchString);
  };

  /** Get all matching elements in the DOM as an array.
   * @param {String} searchString String to search
   * @return {Element} Array of elements
   */
  methods.arrayQuerySelectorAll = searchString => {
    return methods.node2Array(document.querySelectorAll(searchString));
  };

  /** Add a class to all elements in an array.
   * @param {Array} selectElements Array of Elements
   * @param {String} className Class name to add
   */
  methods.addClass = (selectElements, className) => {
    selectElements.forEach(element => {
      element.classList.add(className);
    });
  };

  /** Remove a class from all elements in an array.
   * @param {Array} selectElements Array of Elements
   * @param {String} className Class name to remove
   */
  methods.removeClass = (selectElements, className) => {
    selectElements.forEach(element => {
      element.classList.remove(className);
    });
  };

  //
  // Return public methods
  //

  return methods;
})();
