module.exports = function multiply(first, second) {
  
  const arr1 = first.split('').reverse();
  const arr2 = second.split('').reverse();
  const result = [];

  for (let iterNum1 = 0; iterNum1 < arr1.length; iterNum1++) {
    for (let iterNum2 = 0; iterNum2 < arr2.length; iterNum2++) {
      const idxIter = iterNum1 + iterNum2;
      result[idxIter] = arr1[iterNum1] * arr2[iterNum2] + (idxIter >= result.length ? 0 : result[idxIter]);

      if (result[idxIter] > 9) {
        result[idxIter + 1] = Math.floor(result[idxIter] / 10) + (idxIter + 1 >= result.length ? 0 : result[idxIter + 1]);
        result[idxIter] -= Math.floor(result[idxIter] / 10) * 10;
      }
    }
  }
  return result.reverse().join('');
}
