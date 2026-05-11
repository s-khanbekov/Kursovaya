const filterBtns = document.querySelectorAll('.filter__btn');
const doctorCards = document.querySelectorAll('.doctor-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    doctorCards.forEach(card => {
      if (filter === 'all' || card.dataset.cat === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

function submitForm() {
  const name = document.getElementById('fname');
  const phone = document.getElementById('fphone');
  const spec = document.getElementById('fspec');
  const date = document.getElementById('fdate');
  const msg = document.getElementById('formMsg');

  if (!name || !phone || !spec || !date || !msg) return;

  [name, phone, spec, date].forEach(el => el.style.borderColor = '');
  msg.style.display = 'none';

  let valid = true;

  if (!name.value.trim()) { name.style.borderColor = '#e53935'; valid = false; }
  if (!phone.value.trim()) { phone.style.borderColor = '#e53935'; valid = false; }
  if (!spec.value) { spec.style.borderColor = '#e53935'; valid = false; }
  if (!date.value) { date.style.borderColor = '#e53935'; valid = false; }

  if (!valid) {
    msg.className = 'form-message error';
    msg.textContent = 'Пожалуйста, заполните все обязательные поля (*)';
    msg.style.display = 'block';
    return;
  }

  msg.className = 'form-message success';
  msg.textContent = `✅ Спасибо, ${name.value}! Ваша запись принята. Мы свяжемся с вами по номеру ${phone.value}.`;
  msg.style.display = 'block';

  // Reset form
  ['fname','fphone','femail','fspec','fdate','fcomment'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.why__card, .news__card, .doctor-card, .service-card, .stat-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
