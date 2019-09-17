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

const flatten = function(arrayToFlatten) {
  let output = [];
  for (let element of arrayToFlatten) {
    if (Array.isArray(element)) {
      element.forEach(function(insideElement) {
        output.push(insideElement);
      });
    } else {
      output.push(element);
    }
  }
  console.log(output);
  return output;
};

//TEST ASSERTIONS
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
flatten([1, 2, [3, 4], 5, [6]]);