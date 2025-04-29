const cup = document.querySelector("#cup-display");

// SECTION 1
const milkBtn = document.querySelector("#add-milk");
milkBtn.addEventListener("click", addMilk);

function addMilk() {
  cup.classList.remove("coffee");
  cup.classList.add("milk");
  cup.textContent = "[ Coffee with Milk ]";
}

// SECTION 2
const iceBtn = document.querySelector("#add-ice");
iceBtn.addEventListener("click", addIce);

let iceCount = 0;

function addIce() {
  if (iceCount < 20) {
    const iceCube = document.createElement("span");
    iceCube.textContent = "🧊";
    cup.appendChild(iceCube);
    iceCount++;
  }
  else {
    cup.textContent = "TOO MUCH ICE!";
  }
}

// SECTION 3
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", resetCup);

function resetCup() {
  cup.classList.remove("milk");
  cup.classList.add("coffee");
  cup.innerHTML = "[ Coffee ]";
  iceCount = 0;
}