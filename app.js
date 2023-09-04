// Declaring Variables.
const hamburgerContainer = document.querySelector(".header-main-nav");
const hamburger = document.querySelector(".header-main-nav-hamburger");
const links = document.querySelectorAll(".header-main-nav-links a");

hamburger.addEventListener("click", () => {
    hamburgerContainer.classList.toggle("clicked");
});