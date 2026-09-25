const card = document.querySelector(".card");
const number23 = document.querySelector(".number23");
const openButton = document.querySelector("#openButton");

number23.addEventListener("click", () => {

  // Activate the animation state
  card.classList.add("active");

  // Wait until the color transition and element animations
  // have had time to play
  setTimeout(() => {
    openButton.classList.add("show");
  }, 1200);

});


openButton.addEventListener("click", () => {

  alert("Stage 1 works! 💗\n\nNext we'll connect this to your envelope page.");

});
