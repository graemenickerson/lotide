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

// For arrays with one or two elements, there is no middle. Return an empty array.
// For arrays with odd number of elements, an array containing a single middle element
//  should be returned.
// For arrays with an even number of elements, an array containing the two elements in
//  the middle should be returned

const middle = function(searchArray) {
  let output = [];
  const length = searchArray.length;
  if (length <= 2) return output;
  if (length % 2 === 1) {
    output.push(searchArray[Math.floor(length / 2)]);
  } else {
    output.push(searchArray[length / 2 - 1], searchArray[length / 2 ]);
  }
  return output;
};

// TEST ASSERTIONS
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]