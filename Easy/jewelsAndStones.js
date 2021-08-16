const numJewelsInStones = (jewels, stones) => {
  let count = 0;
  const dividedStones = stones.split("");
  dividedStones.forEach(stone => {
    if (jewels.indexOf(stone) > -1) count++;
  });
  return count;
};