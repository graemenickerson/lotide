// Graeme Nickerson
// September 17, 2019

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
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

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split("");
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
const resultTest = letterPositions("hello");
assertArraysEqual(resultTest.l, [2, 3]);