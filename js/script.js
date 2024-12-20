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
(function () {
  emailjs.init('EwlyDE3Z9qA9uA7_W'); // Replace with your actual Public Key (User ID)
})();

// Contact Form Submission using EmailJS
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const form = this;

  // Send email to you
  emailjs
    .sendForm('service_alm7gnn', 'template_cpmosdg', form) // Replace with your Template ID for yourself
    .then(
      function () {
        console.log('Email sent to you successfully!');
      },
      function (error) {
        console.error('Failed to send email to you.', error);
      }
    );

  // Send acknowledgment email to the user
  emailjs
    .sendForm('service_alm7gnn', 'template_iezcy9t', form) // Replace with the Template ID for acknowledgment
    .then(
      function () {
        alert('Message sent successfully! An acknowledgment has been sent to your email.');
      },
      function (error) {
        console.error('Failed to send acknowledgment email.', error);
        alert('Failed to send acknowledgment. Please try again.');
      }
    );

  // Reset the form
  form.reset();
});


// Define skills as objects with their name and icon class
const hardSkills = [
  { name: "HTML5", icon: "fab fa-html5" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js-square" },
  { name: "Python", icon: "fab fa-python" },
  { name: "SQL (MySQL, Oracle)", icon: "fas fa-database" },
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "Vega-Lite & D3.js", icon: "fas fa-project-diagram" },
  { name: "Data Visualization", icon: "fas fa-chart-line" },
  { name: "Version Control (Git/GitHub)", icon: "fab fa-github" },
  { name: "Cloud Computing (Alibaba Cloud)", icon: "fas fa-cloud" },
  { name: "FastAPI", icon: "fas fa-code" },
];

const softSkills = [
  { name: "Communication", icon: "fas fa-comments" },
  { name: "Teamwork", icon: "fas fa-users" },
  { name: "Problem-Solving", icon: "fas fa-lightbulb" },
  { name: "Project Management", icon: "fas fa-layer-group" },
  { name: "Time Management", icon: "fas fa-clock" },
  { name: "Strategic Thinking", icon: "fas fa-chess" },
  { name: "Adaptability", icon: "fas fa-user-cog" },
  { name: "Multitasking", icon: "fas fa-tasks" },
];

// Function to render skills dynamically
function renderSkills(skillArray, elementId) {
  const container = document.getElementById(elementId);
  skillArray.forEach(skill => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <i class="${skill.icon}"></i>
      <span>${skill.name}</span>
    `;
    container.appendChild(listItem);
  });
}

// Load skills into the appropriate lists
renderSkills(hardSkills, "technical-skills");
renderSkills(softSkills, "soft-skills");

