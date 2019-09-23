// index.js
// Graeme Nickerson
// September 23, 2019

const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const fingKeyByValue = require('./findKeyByValue');

module.exports = {
  head,
  tail,
  middle,
  flatten,
  countOnly,
  letterPositions,
  findKeyByValue
};