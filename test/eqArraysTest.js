// eqArraysTest.js
// Graeme Nickerson
// September 23, 2019

const assert = require('chai').assert;
const eqArrays = require("../eqArrays.js");

describe('eqArrays.js', () => {

  it('returns false when different length arrays are used as inputs', () => {
    assert.equal(eqArrays([1, 2], [1, 2, 3]), false);
  });

  it('returns true when inputs are the same', () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('returns false when inputs have different orders', () => {
    assert.equal(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it('returns false when inputs are different types', () => {
    assert.equal(eqArrays([1, 2, 3], ["1", 2, 3,]), false);
  });

  it('returns true when inputs are the same even with nested arrays', () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

});
