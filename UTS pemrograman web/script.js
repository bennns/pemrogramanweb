const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (form && note) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    note.textContent = `Terima kasih, ${name || 'pengunjung'}! Pesan kamu sudah siap dikirim secara demo.`;
    form.reset();
  });
}
