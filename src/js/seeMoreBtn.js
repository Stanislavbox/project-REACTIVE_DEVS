const renderingContainer = document.querySelector('.js-container');

import { getSelectedBooks } from './categories-book/getSelectedBooks';
import { renderBooksByCategory } from './categories-book/renderBooksByCategory';
import { renderMainTitle } from './categories-book/renderBooksCategoryMainTitle.js';
import { spinnerFoo } from './spinner';
import { scrollToTop } from './scrollToTop';
import { popUpModal } from './popup';

renderingContainer.addEventListener('click', seeMoreBtnClickHandler);

export async function seeMoreBtnClickHandler(e) {
  // e.preventDefault();
  if (!e.target.classList.contains('btn-see-more')) return;

  spinnerFoo();
  const id = e.target.dataset.id;
  const data = await getSelectedBooks(id);

  // Change content part title and colorize its last word
  renderMainTitle(id);

  // Set active category in sidebar
  const categoriesBtn = document.querySelectorAll('.category-btn');
  const activeCategoryBtn = document.querySelector('.active-category');
  for (const btn of categoriesBtn) {
    if (btn.dataset.id === id) {
      btn.classList.add('active-category');
      btn.scrollIntoView({ block: 'center' });
    }
  }
  activeCategoryBtn.classList.remove('active-category');

  renderBooksByCategory(data);
  spinnerFoo();
  scrollToTop();

  const booksList = document.querySelectorAll('.js-book-list');
  if (booksList.length) {
    booksList.forEach(element => element.addEventListener('click', popUpModal));
  }
}
