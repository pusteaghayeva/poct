document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector(".search-box i");
  const inputBox = document.querySelector(".search-box .input-box");

  if (searchBtn && inputBox) {
    searchBtn.addEventListener("click", function (e) {
      e.preventDefault();
      inputBox.classList.toggle("is-visible");
    });
  }
});
