// Graeme Nickerson
// September 17, 2019


const flatten = function(arrayToFlatten) {
  let output = [];
  for (let element of arrayToFlatten) {
    if (Array.isArray(element)) {
      const subArray = flatten(element);
      output = output.concat(subArray);
    } else {
      output.push(element);
    }
  }
  return output;
};

module.exports = flatten;
