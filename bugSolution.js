function myFunction(a, b) {
  return a + Number(b);
}

console.log(myFunction(5, '5')); // Output: 10 (correct numerical addition)

function myFunction2(a, b) {
  return a + parseInt(b, 10);
}

console.log(myFunction2(5, '5')); // Output: 10 (correct numerical addition) 