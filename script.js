// script.js - Custom JS for The Cobei Paradigm website

// Example: Smooth scroll for navigation links (if needed)
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scroll to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Optional: Add form submission feedback for Formspree
  const form = document.querySelector('form[action^="https://formspree.io"]');
  if (form) {
    form.addEventListener('submit', function(e) {
      // Optionally show a loading spinner or message
      // e.g., document.getElementById('form-status').textContent = 'Sending...';
    });
  }
});
