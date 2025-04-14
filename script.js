/* Tip for discussion board post: Pick one small section (1-3 lines) and describe how the code works using vocab like STATEMENT, VARIABLE, FUNCTION, etc.
*/

// SECTION 1

const element1 = document.querySelector('#element-1');
const button1 = document.querySelector('#btn-1');

button1.addEventListener('click', changeText);

function changeText() {
  element1.textContent = "Congratulations! You've changed this text using JS.";
}

// SECTION 2

const element2 = document.querySelector('#element-2');
const button2 = document.querySelector('#btn-2');

button2.addEventListener('click', changeStyle);

function changeStyle() {
  element2.style.color = "hotpink";
  element2.style.fontSize = "20px";
  element2.style.fontFamily = "Impact";
  element2.style.textShadow = "2px 2px black";
}

// SECTION 3

const element3 = document.querySelector('#element-3');
const button3 = document.querySelector('#btn-3');

button3.addEventListener('click', changeImage);

let toggle = true;

function changeImage() {
  toggle = !toggle;
  if (toggle == true) {
    element3.src = 'pikachu.png';
  }
  else {
    element3.src = 'raichu.png';
  }
}