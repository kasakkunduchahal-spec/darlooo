const card = document.querySelector(".card");
const number23 = document.querySelector(".number23");
const openButton = document.querySelector("#openButton");

number23.addEventListener("click", () => {
  card.classList.add("active");

  setTimeout(() => {
    card.classList.add("show-color");
  }, 1200);
});

openButton.addEventListener("click", () => {
  alert("Stage 1 works! 💗");
});
