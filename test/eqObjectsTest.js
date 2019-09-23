// eqObjectsTest.js
// Graeme Nickerson
// September 23, 2019

const assert = require('chai').assert;
const eqObjects = require('../eqObjects.js');

describe('eqObjects.js', () => {

  it('returns false if two objects have a different number of properties', () => {
    assert.equal(eqObjects({a:"1", b:"2"}, {a:"1", b:"2", c:"3"}), false);
  });

  it('returns true if two objects are the same', () => {
    assert.equal(eqObjects({a:"1", b:"2"}, {a:"1", b:"2"}), true);
  });

  it('returns true if two objects are the same and contain arrays', () => {
    assert.equal(eqObjects({a:"1", b:["2", 3]}, {a:"1", b:["2", 3]}), true);
  });

  it('returns false if two objects have the same keys but different values associated with them', () => {
    assert.equal(eqObjects({a:"1", b:"2"}, {a:"1", b: 4}), false);
  });

  it('returns true if two objects are the same and contain objects', () => {
    assert.equal(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it('returns false if two objects that contain objects have different key value pairs', () => {
    assert.equal(eqObjects({a: { y: 0, z: 1 }, b: 2}, {a: { z: 1 }, b: 2}), false);
  });

});
