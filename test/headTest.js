// headTest.js
// Graeme Nickerson
// September 23, 2019

const head = require("../head.js");
const assertEqual = require("../assertEqual.js");

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");