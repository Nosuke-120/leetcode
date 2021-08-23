const countNegatives = grid => {
  let negativeArry = [];
  grid.forEach(arr => {
    negativeArry.push(arr.filter(elm => elm < 0));
  });
  return negativeArry.flat().length;
};