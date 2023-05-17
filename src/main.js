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

import { getTopBooks /*loadMore*/ } from './js/homePage';

// *** Support Ukraine Marup *** //
supportMarkup();

// ----------------------------- //
import { scrollToTop } from './js/scrollToTop';
import { spinnerFoo } from './js/spinner'; //! Stas
import { switchTheme } from './js/switcher'; //! Stas

// console.log(root.screenWidth);

// console.log(root.baseUrl);

// console.log(root.screenWidth)

// let numCardsToRender = 1;

// if (window.innerWidth < 767) {
//   numCardsToRender = 1;
// } else if (window.innerWidth < 1439) {
//   numCardsToRender = 3;
// } else {
//   numCardsToRender = 5;
// }

// let observer = new IntersectionObserver(loadMore, options);
// var options = {
//   root: null,
//   rootMargin: '200px',
//   threshold: 1.0
// }

// getTopBooks(homePage.TOP_BOOKS, numCardsToRender)
getTopBooks(homePage.TOP_BOOKS)
  .then(resp => {
    homePage.listOfBooks.insertAdjacentHTML('afterbegin', resp);
    // observer.observe(homePage.target)
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

const logOutBurgBtn = document.getElementById('logOutButtonBurger');
const logOutButton = document.getElementById('logOutButton');
logOutButton.addEventListener('click', logOutFunc);
logOutBurgBtn.addEventListener('click', logOutFunc);

const userSignUpBurgBtn = document.querySelector('.burger_user_board_signup');
const userBoardBtnSignUp = document.querySelector('.user_board_signup');
userBoardBtnSignUp.addEventListener('click', openForm);
userSignUpBurgBtn.addEventListener('click', openForm);

const closeFormBtn = document.querySelector('.close-modal');
closeFormBtn.addEventListener('click', closeForm);
// _______________________________________________________
import './js/footer';
import {
  popUpModal,
  addBookListListeners,
  removeBookListListeners,
} from './js/popup';

// window.addEventListener('resize', onScreen)

// function onScreen(){
//   let numCardsToRender = 1;

// if (window.innerWidth < 767) {
//   numCardsToRender = 1;
//   getTopBooks(homePage.TOP_BOOKS, numCardsToRender)
//   .then(resp => {

//     homePage.listOfBooks.insertAdjacentHTML('afterbegin', resp);
//     // observer.observe(homePage.target)
//     spinnerFoo();
//   })
//   .catch(error =>
//     Notify.failure('Sorry, there is nothing here. Try again later.')
//   )
//   .finally(() => addBookListListeners());
// } else if (window.innerWidth < 1439) {
//   numCardsToRender = 3;
//   getTopBooks(homePage.TOP_BOOKS, numCardsToRender)
//   .then(resp => {

//     homePage.listOfBooks.insertAdjacentHTML('afterbegin', resp);
//     // observer.observe(homePage.target)
//     spinnerFoo();
//   })
//   .catch(error =>
//     Notify.failure('Sorry, there is nothing here. Try again later.')
//   )
//   .finally(() => addBookListListeners());
// } else {
//   numCardsToRender = 5;
//   getTopBooks(homePage.TOP_BOOKS, numCardsToRender)
//   .then(resp => {

//     homePage.listOfBooks.insertAdjacentHTML('afterbegin', resp);
//     // observer.observe(homePage.target)
//     spinnerFoo();
//   })
//   .catch(error =>
//     Notify.failure('Sorry, there is nothing here. Try again later.')
//   )
//   .finally(() => addBookListListeners());
// }
// }
