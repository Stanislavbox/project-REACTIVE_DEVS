const openFooterModalEl = document.querySelector('.open-footer-modal');
const footerModalEl = document.querySelector('.footer-modal-backdrop');
const footerModalCloseEl = document.querySelector('.footer-modal-close');
const bodyEl = document.querySelector('body');

openFooterModalEl.addEventListener('click', () => {
    footerModalEl.classList.remove('footer-modal-is-hidden');
    bodyEl.classList.add('stop-background');
})

footerModalCloseEl.addEventListener('click', () => {
    footerModalEl.classList.add('footer-modal-is-hidden');
    bodyEl.classList.remove('stop-background');
})

window.addEventListener('click', (e) => {
    if (e.target === footerModalEl) {
        footerModalEl.classList.add('footer-modal-is-hidden');
        bodyEl.classList.remove('stop-background');
  }})

document.addEventListener('keydown', (e)=>{
if (e.key === 'Escape') {
    footerModalEl.classList.add('footer-modal-is-hidden');
    bodyEl.classList.remove('stop-background');
  }})