// findKeyByValue.js
// Graeme Nickerson
// September 17, 2019

const findKeyByValue = function(searchObject, searchTerm) {
  const keys = Object.keys(searchObject);
  for (const element of keys) {
    if (searchObject[element] === searchTerm) {
      return element;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
