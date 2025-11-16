const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const responseDiv = document.getElementById('responseMessage');

    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi en cours...';
      responseDiv.innerHTML = '';

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          responseDiv.innerHTML = '<div class="success-msg">Message envoyé avec succès ! Merci.</div>';
          form.reset();
        } else {
          throw new Error('Erreur');
        }
      } catch (error) {
        responseDiv.innerHTML = '<div class="error-msg">Échec de l\'envoi. Veuillez réessayer.</div>';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Envoyer';
      }
    });