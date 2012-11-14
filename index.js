var _ = null;

// First test
var test = Math.random();
if (test < 0.333)       _ = require('underscore');
else if (test < 0.666)  _ = require('lodash');
else                    _ = require('underdash');

// Ensure we really are selecting what we are selecting
test = _.random(max=3);
if (test === 1)         _ = require('underscore');
else if (test === 2)    _ = require('lodash');
else                    _ = require('underdash');

// Give it up
module.exports = _;
