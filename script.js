/* Tip for discussion board post: Pick one small section (1-3 lines) and
describe how the code works using vocab like STATEMENT, VARIABLE, FUNCTION, etc.
*/

// SECTION #1 
const button1 = document.querySelector('#btn-1');
button1.addEventListener('click', changeText);

function changeText() {
  const element1 = document.querySelector('#element-1');
  element1.textContent = "Congratulations! You've changed this text using JS.";
}

  
// SECTION #2
const button2 = document.querySelector('#btn-2');
button2.addEventListener('click', changeStyle);

function changeStyle() {
  const element2 = document.querySelector('#element-2');
  element2.style.color = "green";
  element2.style.fontSize = "20px";
}