// middleTest.js
// Graeme Nickerson
// September 23, 2019

const assert = require('chai').assert;
const middle = require("../middle.js");


describe('middle.js', () => {

  it('returns [] when an array with a length is 1 ie [5]', () => {
    assert.deepEqual(middle([5]), []);
  });

  it('returns [] when an array with a length is 2 ie [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('returns the middle of an array when the array length is odd', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('returns the middle two items of an array when the array length is even', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  
});
