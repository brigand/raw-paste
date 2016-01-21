var ENABLED = false;
var ENABLED = true;

module.exports = function() {
  if (ENABLED) console.error.apply(console, arguments);
};

