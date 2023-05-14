const categoryListContainerEl = document.querySelector('.categories');

categoryListContainerEl.addEventListener('click', activeCatBtnSwitch);

export function activeCatBtnSwitch(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const activeBtn = e.target;
  const prevActiveBtn = document.querySelector('.active-category');

  if (prevActiveBtn && prevActiveBtn !== activeBtn) {
    prevActiveBtn.classList.remove('active-category');
  }

  activeBtn.classList.add('active-category');
  activeBtn.scrollIntoView({ block: 'center' });
}
