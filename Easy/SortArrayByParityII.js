const sortArrayByParityII = (nums) => {
  let sortedArray = [];
  while(nums.length > 0) {
    // even
    const evenIndex = nums.findIndex(num => num % 2 === 0);
    sortedArray.push(nums[evenIndex]);
    nums.splice(evenIndex, 1);
    // odd
    const oddIndex = nums.findIndex(num => num % 2 !== 0);
    sortedArray.push(nums[oddIndex]);
    nums.splice(oddIndex, 1);
  }
  return sortedArray;
}