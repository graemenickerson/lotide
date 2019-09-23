// tail.js
// Graeme Nickerson
// September 16, 2019

const assertEqual = require('./assertEqual');

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

module.exports = tail;

