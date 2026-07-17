(() => {
  const yearNodes = document.querySelectorAll('[data-current-year]');
  yearNodes.forEach((node) => { node.textContent = String(new Date().getFullYear()); });

  const form = document.querySelector('#deletion-form');
  if (!form) return;

  const supportEmail = 'indian.insect.killer@gmail.com';
  const status = document.querySelector('#form-status');
  const copyButton = document.querySelector('#copy-request');

  function buildRequest() {
    const email = document.querySelector('#account-email').value.trim();
    const uid = document.querySelector('#account-uid').value.trim();
    const reason = document.querySelector('#reason').value.trim();
    const confirmed = document.querySelector('#confirm-delete').checked;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      throw new Error('Enter the email address used for your ShubhFrame account.');
    }
    if (!confirmed) {
      throw new Error('Confirm that you understand account deletion is permanent.');
    }

    const subject = 'ShubhFrame account deletion request';
    const body = [
      'Hello ShubhFrame Support,',
      '',
      'Please permanently delete my ShubhFrame account and associated data.',
      '',
      `Account email: ${email}`,
      `Firebase UID: ${uid || 'Not provided'}`,
      `Reason: ${reason || 'Not provided'}`,
      '',
      'I understand that account deletion is permanent and that I may need to verify ownership of the account.',
      '',
      'Thank you.'
    ].join('\n');

    return { subject, body };
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    try {
      const request = buildRequest();
      status.className = 'status ok';
      status.textContent = 'Your email app should open with a prepared deletion request.';
      window.location.href = `mailto:${supportEmail}?subject=${encodeURIComponent(request.subject)}&body=${encodeURIComponent(request.body)}`;
    } catch (error) {
      status.className = 'status error';
      status.textContent = error.message;
    }
  });

  copyButton.addEventListener('click', async () => {
    try {
      const request = buildRequest();
      const text = `To: ${supportEmail}\nSubject: ${request.subject}\n\n${request.body}`;
      await navigator.clipboard.writeText(text);
      status.className = 'status ok';
      status.textContent = 'Request copied. Paste it into your email app and send it.';
    } catch (error) {
      status.className = 'status error';
      status.textContent = error.message || 'Unable to copy the request.';
    }
  });
})();
