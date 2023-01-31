const burgerButton = document.getElementById("burger-button");
const burgerButtonContainer = document.getElementById("burger-button-container");
const burgerNavigation = document.getElementById("burger-navigation");
const burgerNavLinkClicked = document.querySelectorAll(".burger-nav-link");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("clicked");
  burgerButtonContainer.classList.toggle("clicked");
  burgerNavigation.classList.toggle("show");
});

burgerNavLinkClicked.forEach((clicked) => {
  clicked.addEventListener("click", () => {
    burgerNavigation.classList.remove("show");
    burgerButton.classList.toggle("clicked");
  });
});