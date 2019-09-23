// fingKeyByValueTest.js
// Graeme Nickerson
// September 23, 2019

const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue.js');

describe('findKeyByValue.js', () => {

  it('returns a string value', () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.isString(findKeyByValue(bestTVShowsByGenre, "The Wire"), "findByKeyValue does not return a string");
  });

  it('returns the corret key associated with a value', () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('returns undefined if a value is not present in the object', () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});
