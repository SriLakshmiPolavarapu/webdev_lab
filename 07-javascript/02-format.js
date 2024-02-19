const formatItems = (input) => {
  //for(let i=0;i<input.length;i++){
  //    console.log(input[i]);
  //}
  //return input;

  let res = [];

  for (let item of input) {
    //console.log(item.toFixed(3));
    res.push(item.toFixed(3));
  }
  return res.join(", ");
};
console.log(formatItems([1, 2, 3, 4, 5]));
console.log(formatItems([11, 12, 13, 14, 15]));
console.log(formatItems([21, 22, 23, 24, 25]));
