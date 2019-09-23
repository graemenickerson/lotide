// letterPositionsTest.js
// Graeme Nickerson
// September 23, 2019

const assert = require('chai').assert;
const letterPositions = require('../letterPositions.js');

describe('letterPositions.js', () => {

  it('returns an object', () => {
    assert.isObject(letterPositions("lighthouse labs"), "letterPositions does not return an object");
  });

  it('returns an object with the indexes of each letter', () => {
    assert.deepEqual(letterPositions("lighthouse"), {
      "e": [9],
      "g": [2],
      "h": [3, 5],
      "i": [1],
      "l": [0],
      "o": [6],
      "s": [8],
      "t": [4],
      "u": [7]
    });
  });

});

