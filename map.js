// map.js
// Graeme Nickerson
// September 19, 2019

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) return false;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed:`, arrayOne, `is equal to`, arrayTwo);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:`, arrayOne, `is not equal to`, arrayTwo);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(arrayToMap, callback) {
  let output = [];
  for (let item of arrayToMap) {
    output.push(callback(item));
  }
  return output;
};

const firstLetters = map(words, word => word[0]);

assertArraysEqual(firstLetters, ['g', 'c', 't', 'm', 't']);