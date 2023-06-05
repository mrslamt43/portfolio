// Scroll to section when navbar link is clicked
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const sectionId = link.getAttribute('href');
      document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Validate form before submitting
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    let isValid = true;
    if (nameInput.value.trim() === '') {
      nameInput.classList.add('invalid');
      isValid = false;
    } else {
      nameInput.classList.remove('invalid');
    }
    if (emailInput.value.trim() === '') {
      emailInput.classList.add('invalid');
      isValid = false;
    } else {
      emailInput.classList.remove('invalid');
    }
    if (messageInput.value.trim() === '') {
      messageInput.classList.add('invalid');
      isValid = false;
    } else {
      messageInput.classList.remove('invalid');
    }
    if (!isValid) {
      event.preventDefault();
    }
  });