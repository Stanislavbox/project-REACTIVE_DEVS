const scrollToTopButton = document.querySelector('.back-to-top');
const toTopTarget = document.querySelector('.to-top-target');

export const toTopObserver = new IntersectionObserver(hideButton);

function hideButton(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      scrollToTopButton.classList.remove('hidden');
    } else {
      scrollToTopButton.classList.add('hidden');
    }
  });
}

export function scrollToTop(event) {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
}

toTopObserver.observe(toTopTarget);
scrollToTopButton.addEventListener('click', scrollToTop);
