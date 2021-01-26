const Manipulator = (function() {
  // Private variables

  // Private Methods
  const toArray = nodeList => {
    return Array.prototype.slice.call(nodeList);
  };

  /**
   * Constructor Object
   */
  const Constructor = function(searchString) {
    // Variables
    this.nodeList = document.querySelectorAll(searchString);
    console.log(this.nodeList);
  };

  // Public methods

  //   Get an array of items from the DOM.
  Constructor.prototype.getAll = function() {
    console.log(this.nodeList);
    return toArray(this.nodeList);
  };
  //   Get the first and last matching items from the DOM.
  Constructor.prototype.firstLast = function() {
    const elements = toArray(this.nodeList);
    const firstElement = elements[0];
    const lastElement = elements[-1];
    return [firstElement, lastElement];
  };

  //   Add and remove a class to all matching elements.
  Constructor.prototype.toggle = function(className) {
    const elements = toArray(this.nodeList);
    elements.forEach(element => {
      element.classList.toggle(className);
    });
  };

  //
  // Return the constructor
  //

  return Constructor;
})();
