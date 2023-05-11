// import "basiclightbox/dist/basicLightBox.min.css"

import { root } from './js/root';

import { homePage } from './js/root';

//----------Book categories------
import { getCategoriesArray } from './js/categories-book/getCategoriesArray';
import { renderCategoriesListMarkUp } from './js/categories-book/renderCategoriesListMarkUp';
import { getSelectedBooks } from './js/categories-book/getSelectedBooks';
import { onCategoryClick } from './js/categories-book/handleCategoryClick';
import { createBookMarkup } from './js/categories-book/oneBookMarkup';
import { createCategoryBooksMarkup } from './js/categories-book/allBooksCategoryMarkup.js';
import { renderBooksByCategory } from './js/categories-book/renderBooksByCategory.js';
// ----------------------------- //

import { supportMarkup } from './js/supportUaMarkup';
// *** Support Ukraine Marup *** //
supportMarkup();

// ----------------------------- //

import { spinner } from './js/spinner'; //! Stas
spinner.classList.add('visual-hidden'); //! Stas

// console.log(root.screenWidth);

// console.log(root.baseUrl);

// if (root.screenWidth >= 1280) {
//   root.namber = 5;
// } else if (root.screenWidth) {
//   root.namber = 3;
// }
// function markap() {
//   console.log(root.namber);
// }
// markap();

getTopBooks(homePage.TOP_BOOKS)
  .then(resp => homePage.listOfBooks.insertAdjacentHTML('afterbegin', resp))
  .catch();
