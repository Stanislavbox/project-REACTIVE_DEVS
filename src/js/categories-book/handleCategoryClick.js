import { getSelectedBooks } from './getSelectedBooks';
import { renderBooksByCategory } from './renderBooksByCategory.js';
import { renderMainTitle } from './renderBooksCategoryMainTitle.js';
import { getTopBooks } from '../homePage.js';
import { homePage } from '../root';
import { spinnerFoo } from '../spinner';
import { scrollToTop } from '../scrollToTop';

const homeTitleEl = document.querySelector('.home-title');
const categoryListEl = document.querySelector('.categories-list');
const renderingContainer = document.querySelector('.js-container');

categoryListEl.addEventListener('click', onCategoryClick);

export async function onCategoryClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('category-btn')) return;

  if (event.target.classList.contains('all-categories-btn')) {
    homeTitleEl.innerHTML = `Best Sellers <span class="home-title-accent">Books</span>`;
    spinnerFoo();
    // add function render top books;
    getTopBooks(homePage.TOP_BOOKS)
      .then(resp => {
        renderingContainer.innerHTML = resp;
        spinnerFoo();
        scrollToTop();
      })
      .catch();
    return;
  }
  spinnerFoo();
  const id = event.target.dataset.id;

  const data = await getSelectedBooks(id);

  // Change content part title and colorize its last word
  renderMainTitle(id);

  renderBooksByCategory(data);

  spinnerFoo();

  scrollToTop();
}
