// eqObjects.js
// Graeme Nickerson
// September 18, 2019

const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let equivelentObjects = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    equivelentObjects = false;
  }
  for (const element of Object.keys(object1)) {
    if (!Object.keys(object2).includes(element)) {
      equivelentObjects = false;
    } else if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      equivelentObjects = eqArrays(object1[element], object2[element]);
    } else if (object1[element] instanceof Object && object2[element] instanceof Object) {
      equivelentObjects = eqObjects(object1[element], object2[element]);
    } else if (object1[element] !== object2[element]) {
      equivelentObjects = false;
    }
  }
  return equivelentObjects;
};

module.exports = eqObjects;