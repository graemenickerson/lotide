//Graeme Nickerson
//September 16, 2019

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:`, actual, `===`, expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:`, actual, `!==`, expected);
  }
};

const tail = function(array) {
  if (array === undefined || array.length === 1) {
    return [];
  } else {
    let tempArray = [];
    for (let i = 1; i < array.length; i++) {
      tempArray.push(array[i]);
    }
    return tempArray;
  }
};


//Test Case
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); 
assertEqual(words.length, 3);
