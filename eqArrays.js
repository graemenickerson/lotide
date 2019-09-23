// Graeme Nickerson
// September 17, 2019

const assertEqual = require("./assertEqual.js");

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

module.exports = eqArrays;