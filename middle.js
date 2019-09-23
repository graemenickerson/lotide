// middle.js
// Graeme Nickerson
// September 17, 2019

const assertArraysEqual = require("./assertArraysEqual.js");

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

module.exports = middle;
