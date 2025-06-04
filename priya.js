// Smooth scroll handled by CSS (scroll-behavior)
// Add interactivity for contact form (optional)
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message!");
  this.reset();
});
