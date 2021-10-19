// client-side JS
document.addEventListener("DOMContentLoaded", function () {
  const menuEl = document.querySelector(".mobile-menu");
  const hamburgerEl = document.querySelector(".hamburger-menu");
  const closeEl = document.querySelector(".close-icon");

  hamburgerEl.addEventListener("click", function (e) {
    menuEl.classList.remove("hidden");
    this.classList.add("hidden");
  });
  closeEl.addEventListener("click", function (e) {
    menuEl.classList.add("hidden");
  });
});
