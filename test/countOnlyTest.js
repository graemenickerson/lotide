// countOnlyTest.js
// Graeme Nickerson
// September 23, 2019

const assert = require('chai').assert;
const countOnly = require('../countOnly.js');

describe('countOnly.js', () => {

  it('returns {} when passed an empty array', () => {
    assert.deepEqual(countOnly([]), {});
  });

  it('returns an object with the number of times something specified appears in an array', () => {
    const firstNames = [
        "Karl",
        "Salima",
        "Agouhanna",
        "Fang",
        "Kavith",
        "Jason",
        "Salima",
        "Fang",
        "Joe"
      ];
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true }), { Fang: 2, Jason: 1 });
  });
});

// TEST ASSERTIONS
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);