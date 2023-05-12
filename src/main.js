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
import { renderMainTitle } from './js/categories-book/renderBooksCategoryMainTitle.js';
import { activeCatBtnSwitch } from './js/categories-book/activeCategoryBtnSwitcher.js';
// ----------------------------- //


import { supportMarkup } from "./js/supportUaMarkup";

import { getTopBooks } from "./js/homePage"

// *** Support Ukraine Marup *** //
supportMarkup();

// ----------------------------- //



import { spinnerFoo } from "./js/spinner"; //! Stas
import { switchTheme } from "./js/switcher"; //! Stas
switchTheme() //! Stas


// console.log(root.screenWidth);

// console.log(root.baseUrl);


// console.log(root.screenWidth)

// console.log(root.baseUrl)

// if(root.screenWidth >= 1280){
//   root.namber = 5;
// }else if (root.screenWidth ){
//   root.namber = 3;
// }
// function markap (){
//   console.log(root.namber)
// }
// markap();



getTopBooks(homePage.TOP_BOOKS)
  .then(resp => {
    homePage.listOfBooks.insertAdjacentHTML('afterbegin', resp)
    spinnerFoo()
  })
  .catch();