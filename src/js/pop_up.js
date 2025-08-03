<<<<<<< HEAD
// pop up
let popup = document.getElementById("popup");
let closeBtn = document.querySelector(".close-popup--btn");

let hasShownPopup = false;

window.addEventListener("scroll", function () {
  if (!hasShownPopup && window.scrollY > 100) {
    popup.classList.remove("hide-popup");
=======
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close-popup--btn");

let hasShownPopup = false;

window.addEventListener("scroll", () => {
  if (!hasShownPopup && window.scrollY > 100) {
    popup.classList.remove("hide-popup");
    document.body.classList.add("popup-opened"); 
>>>>>>> 69815476df7e0a253458288d1b4a8f4abbfe7ece
    hasShownPopup = true;
  }
});

<<<<<<< HEAD
closeBtn.addEventListener("click", function () {
  popup.classList.add("hide-popup");
});

// pop up end
=======
closeBtn.addEventListener("click", () => {
  popup.classList.add("hide-popup");
  document.body.classList.remove("popup-opened"); 
});
>>>>>>> 69815476df7e0a253458288d1b4a8f4abbfe7ece
