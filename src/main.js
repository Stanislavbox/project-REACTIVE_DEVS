// import "basiclightbox/dist/basicLightBox.min.css"
import { Notify } from 'notiflix';

import { root } from './js/root';

import { homePage } from './js/root';
import { seeMoreBtnClickHandler } from './js/seeMoreBtn';
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

import { getTopBooks } from './js/homePage';

// *** Support Ukraine Marup *** //
supportMarkup();

// ----------------------------- //
import { scrollToTop } from './js/scrollToTop';
import { spinnerFoo } from './js/spinner'; //! Stas
import { switchTheme } from './js/switcher'; //! Stas

// console.log(root.screenWidth);

// console.log(root.baseUrl);

// console.log(root.screenWidth)

let numCardsToRender = 1;

if (window.innerWidth < 767) {
  numCardsToRender = 1;
} else if (window.innerWidth < 1439) {
  numCardsToRender = 3;
} else {
  numCardsToRender = 5;
}

getTopBooks(homePage.TOP_BOOKS, numCardsToRender)
  .then(resp => {
    
    homePage.listOfBooks.insertAdjacentHTML('afterbegin', resp);
    spinnerFoo();
  })
  .catch(error =>
    Notify.failure('Sorry, there is nothing here. Try again later.')
  )
  .finally(() => addBookListListeners());

// _________________________Auth__________________________

import { registration } from './js/header';
import { logIn } from './js/header';
import { onLoad } from './js/header';
import { logOutFunc } from './js/header';
import { openForm } from './js/header';
import { closeForm } from './js/header';

onLoad();

const formSignUp = document.querySelector('.button-registraition');
const formSignIn = document.querySelector('.button-login');

formSignUp.addEventListener('click', registration);
formSignIn.addEventListener('click', logIn);

const logOutButton = document.getElementById('logOutButton');
logOutButton.addEventListener('click', logOutFunc);

const userBoardBtnSignUp = document.querySelector('.user_board_signup');
userBoardBtnSignUp.addEventListener('click', openForm);

const closeFormBtn = document.querySelector('.close-modal');
closeFormBtn.addEventListener('click', closeForm);
// todo , {displayname: name} {books: arrey} FORM reset

// _______________________________________________________
import './js/footer';
import {
  popUpModal,
  addBookListListeners,
  removeBookListListeners,
} from './js/popup';
