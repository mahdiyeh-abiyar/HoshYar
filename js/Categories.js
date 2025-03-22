const toolsCards = document.getElementById('toolsCards');

toolsCards.addEventListener('wheel', (e) => {
  e.preventDefault();
  // حرکت افقی در اسکرول
  toolsCards.scrollLeft += e.deltaY; // تغییر موقعیت اسکرول بر اساس مقدار چرخ موس
});
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

/* ==========================================
Hamburger menu
========================================== */
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger"); // Hamburger menu button
  const menu = document.getElementById("menu"); // Mobile menu container
  const overlay = document.getElementById("overlay"); // Background overlay

  /* Toggle the mobile menu, overlay, and blur effect on the whole page*/
  hamburger.addEventListener("click", function () {
      menu.classList.toggle("active");
      overlay.classList.toggle("active");
      hamburger.classList.toggle("active");
  });

  /*Close the menu when clicking on the overlay background*/
  overlay.addEventListener("click", function () {
      menu.classList.remove("active");
      overlay.classList.remove("active");
      hamburger.classList.remove("active");
  });
});




