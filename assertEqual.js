//Graeme Nickerson
//September 16, 2019

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:`, actual, `===`, expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:`, actual, `!==`, expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Test 1", "Test 1");
assertEqual(1, 2);