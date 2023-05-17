import { Notify } from 'notiflix';
import { getSelectedBooks } from './getSelectedBooks';
import { renderBooksByCategory } from './renderBooksByCategory.js';
import { renderMainTitle } from './renderBooksCategoryMainTitle.js';
import { getTopBooks } from '../homePage.js';
import { homePage } from '../root';
import { spinnerFoo } from '../spinner';
import { scrollToTop } from '../scrollToTop';
import {
  popUpModal,
  addBookListListeners,
  removeBookListListeners,
} from '../popup';

const homeTitleEl = document.querySelector('.home-title');
const categoryListEl = document.querySelector('.categories-list');
const renderingContainer = document.querySelector('.js-container');

categoryListEl.addEventListener('click', onCategoryClick);

export async function onCategoryClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('category-btn')) return;

  removeBookListListeners();

  if (event.target.classList.contains('all-categories-btn')) {
    homeTitleEl.innerHTML = `Best Sellers <span class="home-title-accent">Books</span>`;
    spinnerFoo();
    // add function render top books;

    // let numCardsToRender = 1;

    // if (window.innerWidth < 759) {
    //   numCardsToRender = 1;
    // } else if (window.innerWidth < 1439) {
    //   numCardsToRender = 3;
    // } else {
    //   numCardsToRender = 5;
    // }

    getTopBooks(homePage.TOP_BOOKS)
      .then(resp => {
        renderingContainer.innerHTML = resp;
        spinnerFoo();
        scrollToTop();
      })
      .catch(error =>
        Notify.failure('Sorry, there is nothing here. Try again later.')
      )
      .finally(() => {
        addBookListListeners();
      });
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

  addBookListListeners();
}
