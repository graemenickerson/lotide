// Graeme Nickerson
// September 18, 2019

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:`, actual, `===`, expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:`, actual, `!==`, expected);
  }
};

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) return false;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let equivelentObjects = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    equivelentObjects = false;
  }
  for (const element of Object.keys(object1)) {
    if (!Object.keys(object2).includes(element)) {
      equivelentObjects = false;
    } else if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      equivelentObjects = eqArrays(object1[element], object2[element]);
    } else if (object1[element] instanceof Object && object2[element] instanceof Object) {
      equivelentObjects = eqObjects(object1[element], object2[element]);
    } else if (object1[element] !== object2[element]) {
      equivelentObjects = false;
    }
  }
  return equivelentObjects;
};

// TEST ASSERTIONS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);// => false