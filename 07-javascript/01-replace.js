const replaceItems = (input) => {
  let res = /gold/gi;
  input = input.replace(res, "SHINY").replace(/silver/i, "SILVER");
  return input;
};
console.log(replaceItems("All that is gold does not glitter"));
console.log(replaceItems("Wisdon is better than silver and GOLD"));
