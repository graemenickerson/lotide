// Graeme Nickerson
// September 17, 2019

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

const without = function(sourceArray, toRemove) {
  let output = [];
  for (let element of sourceArray) {
    for (let i = 0; i < sourceArray; i++) {
      
    }
  }
  return output;
};


//TEST ASSERTIONS
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);