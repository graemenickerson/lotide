// tailTest.js
// Graeme Nickerson
// September 23, 2019

const tail = require("../tail.js");
const assertEqual = require("../assertEqual.js");

// Test Case
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);