const uniqueOccurrences = (arr) => {
  // count how many own numbers
  let count = [];
  // remove same numbers from arr
  const uniqueNums = Array.from(new Set(arr));
  
  uniqueNums.forEach(num => {
      count.push((arr.filter(tar => tar === num)).length);
  })
  
  return (new Set(count)).size === count.length ? true : false ;
}