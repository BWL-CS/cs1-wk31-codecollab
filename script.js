const cup = document.querySelector("#cup-display");
const counter = document.querySelector("#counter");
const milkEmoji = document.querySelector("#milk-emoji");

// SECTION 1
const milkBtn = document.querySelector("#add-milk");
milkBtn.addEventListener("click", addMilk);

function addMilk() {
  cup.classList.remove("coffee-color");
  cup.classList.add("milky-color");
  cup.textContent = "LATTE";
  // ANIMATION (look at CSS)
  milkEmoji.classList.add("milk-animation");
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
    iceCube.style.fontSize = "20px";
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
  cup.classList.remove("milky-color");
  cup.classList.add("coffee-color");
  cup.innerHTML = "COFFEE";
  iceCount = 0;
  iceBtn.disabled = false;
  milkEmoji.classList.remove("milk-animation");
}