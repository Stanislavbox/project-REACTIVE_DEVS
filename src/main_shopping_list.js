// _________________________Auth__________________________

import { registration } from './js/header';
import { logIn } from './js/header';
import { logOutFunc } from './js/header';
import { openForm } from './js/header';
import { onLoad } from './js/header';

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

import { supportMarkup } from './js/supportUaMarkup';

supportMarkup();


import { spinnerFoo } from './js/spinner'; //! Stas
import { switchTheme } from './js/switcher'; //! Stas

import "./js/footer";