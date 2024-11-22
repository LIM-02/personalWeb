// Initialize AOS Library
AOS.init();

// Toggle Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.mobile-nav-links');

menuToggle.addEventListener('click', (event) => {
  navLinks.classList.toggle('nav-active');
  event.stopPropagation(); // Prevent click event from bubbling up to document
});

// Close mobile menu when a link is clicked
const navItems = document.querySelectorAll('.mobile-nav-links li a');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navLinks.classList.contains('nav-active')) {
      navLinks.classList.remove('nav-active');
    }
  });
});

// Close mobile menu when clicking outside of it
document.addEventListener('click', (event) => {
  // Check if navLinks is open and the click is outside of menuToggle and navLinks
  if (navLinks.classList.contains('nav-active') && !navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
    navLinks.classList.remove('nav-active');
  }
});

// Smooth Scrolling for Desktop Navigation
const navDesktopItems = document.querySelectorAll('.nav-links-desktop li a');

navDesktopItems.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = event.target.getAttribute('href');
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Initialize EmailJS
(function(){
  emailjs.init('YOUR_EMAILJS_USER_ID'); // Replace with your EmailJS user ID
})();

// Contact Form Submission using EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Send the form data
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function() {
      alert('Message sent successfully!');
    }, function(error) {
      alert('Failed to send message. Please try again.');
    });

  // Reset the form
  this.reset();
});
