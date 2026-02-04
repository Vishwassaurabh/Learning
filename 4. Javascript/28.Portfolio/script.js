//mobile toggle
const menu = document.querySelector(".menu-btn");
const navlinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});
