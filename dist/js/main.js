const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
  
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }

}

//console.log(style.getPropertyValue('--color-font-general'));
var navbar = document.getElementById("nav");
window.addEventListener("scroll", hideMenuOnScroll);

function hideMenuOnScroll(){
  
  //alert("Height " +$height);
  if (window.scrollY < 50) {
    //alert("Hello World");
    nav.style.top = "0";
  }else{
    nav.style.top = "-50vw";
  }
  

}