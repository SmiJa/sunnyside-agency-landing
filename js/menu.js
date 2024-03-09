const mobileNav = document.getElementById("mobile-nav");
const mobileSubMenu = document.getElementById("sub-menu");
// let showMenu = false;

mobileNav.addEventListener("click", (e) => {
  e.preventDefault;
  mobileSubMenu.classList.toggle('show');

})