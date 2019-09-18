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
  for (let element of sourceArray){
    if (!toRemove.includes(element)) {
      output.push(element);
    }
  }
  // for (let i = 0; i < sourceArray.length; i++) {
  //   let match = false;
  //   for (let j = 0; j < toRemove.length; j++) {
  //     if (sourceArray[i] === toRemove[j]) {
  //       match = true;
  //       break;
  //     }
  //   }
  //   if (!match) output.push(sourceArray[i]);
  // }
  return output;
};


//TEST ASSERTIONS
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["world", "hello"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));