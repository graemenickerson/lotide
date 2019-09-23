// letterPositions.js
// Graeme Nickerson
// September 17, 2019

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split("");
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;
