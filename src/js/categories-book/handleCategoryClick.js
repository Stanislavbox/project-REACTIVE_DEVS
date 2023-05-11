import { getSelectedBooks } from './getSelectedBooks';
import { renderBooksByCategory } from './renderBooksByCategory.js';
// import { renderTopBooks } from '';
// import { renderMainTitle } from '';

const categoryListEl = document.querySelector('.categories-list');

categoryListEl.addEventListener('click', onCategoryClick);

export async function onCategoryClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('category-btn')) return;

  if (event.target.classList.contains('all-categories-btn')) {
    // mainTitle.innerHTML = `Best Seller <span class="main-title--last-word-static">Books</span>`;
    // await renderTopBooks();
    return;
  }

  const id = event.target.dataset.id;

  const data = await getSelectedBooks(id);

  // Change content part title and colorize its last word
  //   renderMainTitle(id);

  renderBooksByCategory(data);
  //   scrollToTop();
}
