  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = LaserBase;
    }
    exports.LaserBase = LaserBase;
  } else {
    root.LaserBase = LaserBase;
  }

}.call(this));