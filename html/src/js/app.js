const toUp = document.querySelector('.toUp');

toUp.addEventListener('click', () => {
  window.scrollBy({
    top: -document.documentElement.scrollHeight,
    behavior: 'smooth',
  })
})

const ticketsBtn = document.querySelector('.header__form-btn');

if (ticketsBtn) {
  ticketsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.location.href = '../tickets.html';
  })
}

