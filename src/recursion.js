// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n === 0 || n === 1) return 1;

  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) return 1;

  return n * nFactorial(n - 1);
};

/* Extra Credit */

// create another function that retrieves all the leaves

const getAllLeaves = (obj) => {
  return Object.values(obj).reduce((leaves, value) => {
    if (typeof value === 'object') {
      return [...leaves, ...getAllLeaves(value)];
    }

    return [...leaves, value];
  }, []);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false

  const uniqLeaves = getAllLeaves(obj).reduce((leafArray, leaf) => {
    return (leafArray.includes(leaf)) ? leafArray : [...leafArray, leaf];
  }, []);

  return uniqLeaves.length === 1;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
