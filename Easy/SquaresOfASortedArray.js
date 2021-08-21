const sortedSquares = (nums) => {
  const nonDecreasingOrderNums = nums.map(num => num * num);
  return nonDecreasingOrderNums.sort((a, b) => {
    return a - b;
  })
}