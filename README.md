# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript bug: unexpected string concatenation due to type coercion.  The `myFunction` adds a number and a string, resulting in string concatenation instead of the expected numerical addition.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version.

## Bug Description:

JavaScript's loose typing can lead to unexpected behavior. When adding a number and a string, JavaScript implicitly converts the number to a string and performs string concatenation.

## Solution:

The solution involves explicitly converting the string to a number using `parseInt()` or `Number()` before performing the addition.