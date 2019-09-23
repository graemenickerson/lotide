// tailTest.js
// Graeme Nickerson
// September 23, 2019

const assert = require('chai').assert;
const tail = require("../tail.js");


describe('tail.js', () => {

  it('should return ["Lighthouse", "Labs"] when given ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });

  it('returns [] when an array with a length is 1 ie [5]', () => {
    assert.deepEqual(tail([5]), []);
  });

  it('returns [] when an array that is empty', () => {
    assert.deepEqual(tail([]), []);
  });

});
