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


/* ==========================================
Feature Tabs
========================================== */
const tabButtons = document.querySelectorAll('.featur__tabs-button'); // Select all tab buttons
const cards = document.querySelectorAll('.featur__card'); // Select all feature cards
const toolsCards = document.getElementById('toolsCards'); // Select the container of the cards

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the active class from all tab buttons
    tabButtons.forEach(btn => btn.classList.remove('featur__tabs-button--active'));
    // Add the active class to the clicked button
    button.classList.add('featur__tabs-button--active');

    const tab = button.getAttribute('data-tab'); // Get the value of the clicked tab

    // Filter cards based on the selected tab
    cards.forEach(card => {
      if (tab === 'all' || card.getAttribute('data-category') === tab) {
        card.style.display = 'block'; // Display the cards that match the selected tab
      } else {
        card.style.display = 'none'; // Hide cards that do not match
      }
    });
    
    // Adjust the layout of the cards and the scroll position
    const visibleCards = Array.from(cards).filter(card => card.style.display === 'block');
    toolsCards.style.justifyContent = visibleCards.length < 3 ? 'center' : 'flex-start'; // Change the card layout
    toolsCards.scrollLeft = 0; // Reset the scroll position when switching tabs
  });
});


/* ==========================================
Faq Question
========================================== */
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      const icon = item.querySelector('span');
      
      // Close all other answers
      document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
        if (otherAnswer !== answer) {
          otherAnswer.style.display = 'none';
          otherAnswer.previousElementSibling.querySelector('span').classList.remove('rotate');
        }
      });
  
      // Toggle the clicked answer
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.classList.remove('rotate');
      } else {
        answer.style.display = 'block';
        icon.classList.add('rotate');
      }
    });
});
  