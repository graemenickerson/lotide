# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @graemenickerson/lotide`

**Require it:**

`const _ = require('@graemenickerson/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Takes an array and returns the first element.
* `tail(array)`: Takes an array and returns all of the array without the first element.
* `middle(array)`: Takes an array and returns the middle element if the length is a odd number and the middle two elements if the length is even.
* `flatten(array)`: Takes an array filled with nested arrays and returns a single array containing all values stored in all of the arrays.
* `countOnly(array, object)`: Takes an array and an object and searches for the items in the object in the array and returns an object with the results.
* `leterPositions(string)`: Takes a string and returns the indexed positions of each of the characters in an object.
* `findKeyByValue(object, string)`: Takes in an object and a string and returns the key that matches the value of the string.
* `eqArrays(array1, array2)`: Takes two arrays and compares them for equality across all elements.
* `eqObjects(object1, object2)`: Takes two objects and compares them for equality across all elements.