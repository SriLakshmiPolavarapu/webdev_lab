let res = {};
const insertItem = (key, value) => {
  res[key] = value;
};

const deleteItem = (key) => {
  delete res[key];
};

const lookItem = (key) => {
  //return key;
  if (res.hasOwnProperty(key)) {
    return res[key];
  }
  return "Item not found";
};

const printitems = () => {
  return Object.keys(res).join(", ");
};

insertItem("Hello", "World");
insertItem("one", "two");
insertItem("lorem", "ipsum");
console.log(printitems());
console.log(lookItem("one"));
deleteItem("one");
console.log(printitems());
console.log(lookItem("one"));
