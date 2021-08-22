// My Answer
const kWeakestRows = (mat, k) => {
  const matStrengthLength = mat.map((m, i) => {
      const mSolid = m.filter(mElm => mElm === 1)
      
      return [i, mSolid.length]
  })
  
  const sortedByStrength = matStrengthLength.sort((a, b) => a[1] - b[1] ).slice(0, k)
  
  return sortedByStrength.map(s => s[0])
};

// Another Answer
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function (mat, k) {
  return mat
    .map((value, index) => [index, value.reduce((pre, cur) => pre + cur)])
    .sort((a, b) => a[1] - b[1])
    .slice(0, k)
    .map((pair) => pair[0]);
};