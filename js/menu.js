const mobileNav = document.getElementById("mobile-nav");
const mobileSubMenu = document.getElementById("sub-menu");

window.addEventListener('resize', () => {
  let width = window.innerWidth;
  if (width > 799) {
    mobileSubMenu.classList.remove('show-sub-menu');
  }
})

mobileNav.addEventListener("click", (e) => {
  e.preventDefault;
  mobileSubMenu.classList.toggle('show-sub-menu');

})