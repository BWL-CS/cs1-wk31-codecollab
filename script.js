const cup = document.querySelector("#cup-display");

document.querySelector("#add-milk").addEventListener("click", function () {
  cup.classList.add("milk");
  cup.textContent = "Milk added!";
});

document.querySelector("#add-caramel").addEventListener("click", function () {
  cup.classList.add("caramel");
  cup.textContent = "Caramel syrup added!";
});

document.querySelector("#add-ice").addEventListener("click", function () {
  const snowflake = document.createElement("div");
  snowflake.textContent = "❄️ Ice added!";
  cup.appendChild(snowflake);
});
