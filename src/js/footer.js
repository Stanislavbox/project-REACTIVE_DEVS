
const openFooterModalEl = document.querySelector('.open-footer-modal');
const footerModalEl = document.querySelector('.footer-modal');
const footerModalCloseEl = document.querySelector('.footer-modal-close');


openFooterModalEl.addEventListener('click', () => {
    footerModalEl.classList.remove('footer-modal-is-hidden');
})

footerModalCloseEl.addEventListener('click', () =>
    footerModalEl.classList.add('footer-modal-is-hidden'))

window.addEventListener('click', (e) => {
    if (e.target === footerModalEl) {
        footerModalEl.classList.add('footer-modal-is-hidden');
  }})

document.addEventListener('keydown', (e)=>{
if (e.key === 'Escape') {
    footerModalEl.classList.add('footer-modal-is-hidden');
  }})