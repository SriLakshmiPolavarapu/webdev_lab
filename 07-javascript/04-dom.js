//Ex-1

let userInput = document.querySelector("#userInput1");
let copy = document.querySelector("#copy");
let output = document.querySelector("#output");

//event listener
copy.addEventListener("click", handleClick);

//this is function callback
function handleClick(event) {
  console.log("click event", handleClick);
  output.textContent = userInput.value;
}

//other ways
//1.
//document.getElementById('copy').onclick=()=>{
//   let userInput=document.getElementById('userInput1');
//   let output=document.getElementById('output')
//   output.textContent = userInput.value;
//};

//2.
//document.getElementById('copy').onclick=()=>{
//document.getElementById('output').textContent= document.getElementById('userInput1').value;
//};

//Ex-2
let userInput2 = document.querySelector("#userInput2");
//add event listener
userInput2.addEventListener("input", handleInput);

let section = document.querySelector("#inputEventExample");
let element = document.createElement("div");
element.setAttribute("class", "output");
section.append(element);

//function call
function handleInput(event) {
  console.log(userInput2.value);
  element.textContent = userInput2.value;
}
