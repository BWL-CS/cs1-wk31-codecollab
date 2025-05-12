const cup = document.querySelector("#cup-display");
const counter = document.querySelector("#counter");

// SECTION 1
const milkBtn = document.querySelector("#add-milk");
milkBtn.addEventListener("click", addMilk);

function addMilk() {
  cup.classList.remove("coffee");
  cup.classList.add("milk");
  cup.textContent = "LATTE";
}

// SECTION 2
const iceBtn = document.querySelector("#add-ice");
iceBtn.addEventListener("click", addIce);

let iceCount = 0;

function addIce() {
  cup.textContent = "";
  if (iceCount < 10) {
    const iceCube = document.createElement("span");
    iceCube.textContent = "🧊";
    iceCube.style.fontSize = "40px";
    cup.appendChild(iceCube);
    iceCount++;
  }
  else {
    cup.textContent = "TOO MUCH ICE!";
    iceBtn.disabled = true;
  }
  counter.textContent = "Ice Cubes Added: " + iceCount;
}

// SECTION 3
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", resetCup);

function resetCup() {
  cup.classList.remove("milk");
  cup.classList.add("coffee");
  cup.innerHTML = "COFFEE";
  iceCount = 0;
  iceBtn.disabled = false;
}