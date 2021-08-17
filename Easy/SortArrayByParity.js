const sortArrayByParity = (nums) => {
  let evenNums = nums.filter(num => num % 2 === 0);
  let oddNums = nums.filter(num => num % 2 !== 0);
  return evenNums.concat(oddNums);
}