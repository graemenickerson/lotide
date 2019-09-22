// Graeme Nickerson
// September 17, 2019

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:`, actual, `===`, expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:`, actual, `!==`, expected);
  }
};

const eqArrays = function(firstArray, secondArray) {
  let equivelentArrays = true;
  if (firstArray.length !== secondArray.length) {
    equivelentArrays = false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (Array.isArray(firstArray[i]) && Array.isArray(secondArray[i])) {
      equivelentArrays = eqArrays(firstArray[i], secondArray[i]);
    } else if (firstArray[i] !== secondArray[i]) {
      equivelentArrays = false;
    }
  }
  return equivelentArrays;
};

// TESTING PARAMS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false