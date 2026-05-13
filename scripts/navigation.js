const navButton = document.getElementById("nav-button");
const navMenu = document.getElementById('nav-menu');

navButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    navButton.classList.toggle("open");
});


