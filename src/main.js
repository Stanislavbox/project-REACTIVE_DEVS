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

import { supportMarkup } from './js/supportUaMarkup';

import { getTopBooks, hideText } from './js/homePage';

// *** Support Ukraine Marup *** //
supportMarkup();

// ----------------------------- //

import { spinnerFoo } from './js/spinner'; //! Stas
// import { switchTheme } from './js/switcher'; //! Stas
// switchTheme(); //! Stas

// console.log(root.screenWidth);

// console.log(root.baseUrl);

// console.log(root.screenWidth)

getTopBooks(homePage.TOP_BOOKS)
  .then(resp => {
    homePage.listOfBooks.insertAdjacentHTML('afterbegin', resp);
    spinnerFoo();
  })
  .catch();

// _________________________Auth__________________________

import { registration } from './js/header';
import { logIn } from './js/header';
import { onLoad } from './js/header';
import { logOutFunc } from './js/header';
import { openForm } from './js/header';

onLoad();

const formSignUp = document.querySelector('.sign_up_form');
const formSignIn = document.querySelector('.sign_in_form');

formSignUp.addEventListener('submit', registration);
formSignIn.addEventListener('submit', logIn);

const logOutButton = document.getElementById('logOutButton');
logOutButton.addEventListener('click', logOutFunc);

const userBoardBtnSignUp = document.querySelector('.user_board_signup');
userBoardBtnSignUp.addEventListener('click', openForm);
// todo , {displayname: name} {books: arrey} FORM reset

// _______________________________________________________
