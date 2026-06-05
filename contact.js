document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields before sending.');
    return;
  }

  const successMessage = document.getElementById('contactSuccess');
  successMessage.textContent = 'Message sent successfully! I will contact you soon.';
  successMessage.classList.remove('d-none');

  const subject = encodeURIComponent('Contact from portfolio website');
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:marioporra9@gmail.com?subject=${subject}&body=${body}`;
});
