// Graeme Nickerson
// September 18, 2019

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) return false;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  console.log(object1, object2);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const element of Object.keys(object1)) {
    if (!Object.keys(object2).includes(element)) {
      return false;
    } else if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      return eqArrays(object1[element], object2[element]);
    } else if (object1[element] !== object2[element]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:`, inspect(actual), `===`, inspect(expected));
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:`, inspect(actual), `!==`, inspect(expected));
  }
};

// TEST ASSERTIONS
assertObjectsEqual({a: 2, b:3}, {a:2, b:4});