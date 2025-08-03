// pop up
let popup = document.getElementById("popup");
let closeBtn = document.querySelector(".close-popup--btn");

let hasShownPopup = false;

window.addEventListener("scroll", function () {
  if (!hasShownPopup && window.scrollY > 100) {
    popup.classList.remove("hide-popup");
    hasShownPopup = true;
  }
});

closeBtn.addEventListener("click", function () {
  popup.classList.add("hide-popup");
});

// pop up end