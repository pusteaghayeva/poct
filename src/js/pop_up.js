const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close-popup--btn");

let hasShownPopup = false;

window.addEventListener("scroll", () => {
  if (!hasShownPopup && window.scrollY > 100) {
    popup.classList.remove("hide-popup");
    document.body.classList.add("popup-opened"); 
    hasShownPopup = true;
  }
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hide-popup");
  document.body.classList.remove("popup-opened"); 
});
