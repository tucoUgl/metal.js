(function() {
  'use strict';

  lfr.array = lfr.array || {};

  /**
   * Transforms the input nested array to become flat.
   * @param {Array.<*|Array.<*>>} arr Nested array to flatten.
   * @param {Array.<*>} opt_output Optional output array.
   * @return {Array.<*>} Flat array.
   */
  lfr.array.flatten = function(arr, opt_output) {
    var output = opt_output || [];
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        lfr.array.flatten(arr[i], output);
      } else {
        output.push(arr[i]);
      }
    }
    return output;
  };

  /**
   * Removes the first occurrence of a particular value from an array.
   * @param {Array.<T>} arr Array from which to remove value.
   * @param {T} obj Object to remove.
   * @return {boolean} True if an element was removed.
   * @template T
   */
  lfr.array.remove = function(arr, obj) {
    var i = arr.indexOf(obj);
    var rv;
    if ( (rv = i >= 0) ) {
      lfr.array.removeAt(arr, i);
    }
    return rv;
  };

  /**
   * Removes from an array the element at index i
   * @param {Array} arr Array or array like object from which to remove value.
   * @param {number} i The index to remove.
   * @return {boolean} True if an element was removed.
   */
  lfr.array.removeAt = function(arr, i) {
    return Array.prototype.splice.call(arr, i, 1).length === 1;
  };

}());
