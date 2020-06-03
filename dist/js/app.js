//Selection DOM
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const menuItems = document.querySelectorAll(".menu-item");

//Menu initial value
let showMenu = false;

//Add event listener
menuBtn.addEventListener("click", toggleMenu);

//Create toggleMenu function
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    menuItems.forEach((item) => item.classList.add("show"));
    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    menuItems.forEach((item) => item.classList.remove("show"));
    //set menu state
    showMenu = false;
  }
}
