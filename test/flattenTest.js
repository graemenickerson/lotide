// flattenTest.js
// Graeme Nickerson
// September 23, 2019

const assert = require('chai').assert;
const flatten = require('../flatten.js');

describe("flatten.js", () => {

  it(`should return an array`, () => {
    assert.deepEqual([],[]);
  });
  
  it(`should return a flattened array`, () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

});
