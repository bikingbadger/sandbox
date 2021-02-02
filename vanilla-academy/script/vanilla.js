;(function () {

	'use strict';

	/**
	 * Get an element in the DOM
	 * @param  {String} selector The selector to match against
	 * @param  {Node} scope      An element to search within [optional]
	 * @return {Node}            The first matching element
	 */
	var get = function (selector, scope) {
		if (!selector) throw new Error('Please provide a selector.');
		return scope ? scope.querySelector(selector) : document.querySelector(selector);
	};

	/**
	 * Get all matching elements in the DOM
	 * @param  {String} selector The selector to match against
	 * @param  {Node} scope      An element to search within [optional]
	 * @return {NodeList}        The matching elements
	 */
	const getAll = function (selector, scope) {
		if (!selector) throw new Error('Please provide a selector.');
		return scope ? scope.querySelectorAll(selector) : document.querySelectorAll(selector);
	};

	/**
	 * Setup an event listener
	 * @param  {Node}     elem        The element to attach the listener to
	 * @param  {String}   event       The event to listen for
	 * @param  {Function} callback    The callback to run on the event
	 * @param  {Boolean}  useCapture  If true, set useCapture to true [optional]
	 */
	const on = function (elem, event, callback, useCapture) {
		if (!elem) throw new Error('Please provide an element to attach the event to.');
		if (!event) throw new Error('Please provide an event to listen for.');
		if (!callback || typeof callback !== 'function') throw new Error('Please provide a valid callback function to run');
		elem.addEventListener(event, callback, useCapture || false);
	};

	// Extend myApp
	academy.extend('get', get);
    academy.extend('getAll', getAll);
    academy.extend('on',on);

})();