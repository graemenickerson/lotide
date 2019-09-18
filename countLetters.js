//Graeme Nickerson
//September 16, 2019

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:`, actual, `===`, expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:`, actual, `!==`, expected);
  }
};

const countLetters = function(inputString) {
  let output = {};
  for (let element of inputString) {
    output[element] ? output[element] += 1 : output[element] = 1;
  }
  return output;
};

console.log(countLetters("lighthouse in the house"));

const result = countLetters("lighthouse in the house");
assertEqual(result["l"], 1);