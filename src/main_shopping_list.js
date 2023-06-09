// _________________________Auth__________________________
import { registration } from './js/header';
import { logIn } from './js/header';
import { onLoad } from './js/header';
import { logOutFunc } from './js/header';
import { openForm } from './js/header';
import { closeForm } from './js/header';
import { pageCheck } from './js/header';

onLoad();
pageCheck();

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

import { supportMarkup } from './js/supportUaMarkup';
supportMarkup();

// import { spinnerFoo } from './js/spinner'; //! Stas
import { switchTheme } from './js/switcher'; //! Stas

import { createShopingListMarkup } from './js/shoppingList';
createShopingListMarkup();
import './js/footer';
