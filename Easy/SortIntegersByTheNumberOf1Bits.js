// Wrong Answer(in Progess)
const sortByBits = arr => {
  let resultArr = []
  
  let binaryArr = arr.sort().map((tarArr, index) => {
    let tarBinary = tarArr.toString(2).split("").filter(t => t === '1');
    return [index, tarBinary.length];
  })
  
  const sortBinaryArr = binaryArr.sort((a, b) => a[1] - b[1])
  
  for (let i = 0; i < sortBinaryArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (sortBinaryArr[i][0] === arr[j]) {
          resultArr.push(arr[j]);
      }      
    }
  }
  return resultArr;
}

// Correct Answer

var sortByBits = function (arr) {
  const bitCount = (num) => {
    let sum = 0;
    while (num) {
      sum += num & 1;
      num >>= 1;
    }
    return sum;
  };

  return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b);
};