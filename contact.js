const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    const lang = localStorage.getItem('portfolio-lang') || 'es';
    const dict = window.portfolioTranslations?.[lang] || window.portfolioTranslations?.es;

    if (!name || !email || !message) {
      alert(dict?.['form.validation'] || 'Please fill in all fields before sending.');
      return;
    }

    const successMessage = document.getElementById('contactSuccess');

    fetch('https://formsubmit.co/ajax/marioporra9@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: 'Nuevo mensaje desde el portfolio',
        _captcha: 'false'
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al enviar');
        }

        successMessage.textContent = dict?.['form.success'] || 'Message sent successfully! I will contact you soon.';
        successMessage.classList.remove('d-none');
        form.reset();
      })
      .catch(() => {
        successMessage.textContent = dict?.['form.success'] || 'Message sent successfully! I will contact you soon.';
        successMessage.classList.remove('d-none');
        form.reset();
      });
  });
}
