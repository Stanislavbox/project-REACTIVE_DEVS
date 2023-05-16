import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBcc1DA6ZvhYH6HNL0bBHQ0dDKoHx7bVFo',
  authDomain: 'goit-77-team-1-books-project.firebaseapp.com',
  projectId: 'goit-77-team-1-books-project',
  storageBucket: 'goit-77-team-1-books-project.appspot.com',
  messagingSenderId: '665612464460',
  appId: '1:665612464460:web:7e87cc8c9c9cb455a91fe9',
  measurementId: 'G-JWPP6GW2CN',
  databaseURL:
    'https://goit-77-team-1-books-project-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ________________database_______________

const database = getDatabase(app);

function writeUserData() {
  const db = database;
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
  });
}

// __________________________________

// const signUpName = document.getElementById('sign_up_name');
const signUpEmail = document.getElementById('sign_up_email');
const signUpPassword = document.getElementById('sign_up_password');
const userBlock = document.querySelector('.header__username');
const userBoardName = document.querySelector('.userboard_dropdown');
const burgerUserBlock = document.querySelector('.burger__username');
const burgerUserInfo = document.querySelector('.burger_userinfo');

export function registration(event) {
  event.preventDefault();
  const email = signUpEmail.value;
  const password = signUpPassword.value;
  // const name = signUpName.value;
  if (!email || !password ) {
    alert('Всі поля мають бути заповнені!');
    return;
  }
  createUserWithEmailAndPassword(auth, email, password,)
    .then(userCredential => {
      const user = userCredential.user;
      userBlock.textContent = user.email;
      burgerUserBlock.textContent = user.email;
      localStorage.setItem('user', JSON.stringify(user));
      userBoardBtnSignUp.classList.toggle('is-hidden');
      userBoardName.classList.toggle('is-hidden');
      burgerUserInfo.classList.toggle('is-hidden');
      backdrop_hide_show.classList.toggle('is-hidden');
      location.reload();
    })
    .catch(error => {
      const errorMessage = error.message;
      if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
        alert('Цей email вже використовується!');
      }
      console.log('Помилка при реєстрації:', error);
    });
}

export function logIn(event) {
  event.preventDefault();
  const email = signUpEmail.value;
  const password = signUpPassword.value;

  if (!email || !password) {
    alert('Всі поля мають бути засіяні!');
    return;
  }
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      localStorage.setItem('user', JSON.stringify(user));
      userBlock.textContent = user.email;
      burgerUserBlock.textContent = user.email;
      userBoardBtnSignUp.classList.toggle('is-hidden');
      userBoardName.classList.toggle('is-hidden');
      burgerUserInfo.classList.toggle('is-hidden');
      location.reload();
    })
    .catch(error => {
      const errorMessage = error.message;
      if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
        alert('Не вірний email');
      } else if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
        alert('Не вірний password');
      } else if (errorMessage === 'Firebase: Error (auth/user-not-found).') {
        alert('Такого користувача не знайдено');
      }
      console.log(errorMessage);
    });
}
export function onLoad() {
  window.addEventListener('load', () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      userBlock.textContent = user.email;
      // burgerUserBlock.textContent = user.email;
      userBoardName.classList.toggle('is-hidden');
      burgerUserInfo.classList.toggle('is-hidden');
    } else {
      userBoardBtnSignUp.classList.toggle('is-hidden');
    }
  });
}

export function logOutFunc() {
  auth
    .signOut()
    .then(() => {
      localStorage.removeItem('user');
      userBlock.textContent = '';
      alert('Вихід з облікового запису');
      location.reload();
    })
    .catch(error => {
      console.log('Помилка при виході:', error);
    });
}

// ____________________MODALS_____________
const userBoardBtnSignUp = document.querySelector('.user_board_signup');
export function openForm(event) {
  modal_form.style.visibility = 'visible';
  modal_form.style.opacity = 1;
  backdrop_hide_show.classList.toggle('is-hidden');
}

const closeFormBtn = document.querySelector('.close-modal');
closeFormBtn.addEventListener('click', closeForm);
export function closeForm() {
  modal_form.style.visibility = 'hidden';
  modal_form.style.opacity = 0;
  backdrop_hide_show.classList.toggle('is-hidden');
}

// _________________________burger________________
const burgerSignUpButton = document.querySelector('.burger_user_board_signup');
const burgerBtn = document.querySelector('.header__burger_menu');
burgerBtn.addEventListener('click', openBurgerMenu);
export function openBurgerMenu() {
  modal_burger.style.visibility = 'visible';
  modal_burger.style.opacity = 1;
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    const user = JSON.parse(storedUser);
    userBlock.textContent = user.email;
    burgerUserBlock.textContent = user.email;
  } else {
    burgerSignUpButton.classList.toggle('is-hidden')
  }
}

const closeBurgerBtn = document.querySelector('.close-modal-burger');
closeBurgerBtn.addEventListener('click', closeBurgerMenu);

export function closeBurgerMenu() {
  modal_burger.style.visibility = 'hidden';
  modal_burger.style.opacity = 0;
    const storedUser = localStorage.getItem('user');
  if (!storedUser) {
     burgerSignUpButton.classList.toggle('is-hidden'); 
    }
}

// __________________________________________

// _____________sign_up / sign_in____________
const signUplink = document.querySelector('.first-link');
const signInlink = document.querySelector('.last-link');
const formSignUp = document.querySelector('.button-registraition');
const formSignIn = document.querySelector('.button-login');

signInlink.addEventListener('click', onLinkSignIn)
signUplink.addEventListener('click', onLinkSignUp);

export function onLinkSignIn(evt) {
  evt.preventDefault()
  formSignUp.classList.toggle('is-hidden')
  formSignIn.classList.toggle('is-hidden');
  signInlink.classList.toggle('link_underline')
  signUplink.classList.toggle('link_underline');
}

export function onLinkSignUp(evt) {
  evt.preventDefault();
  formSignUp.classList.toggle('is-hidden');
  formSignIn.classList.toggle('is-hidden');
    signInlink.classList.toggle('link_underline');
    signUplink.classList.toggle('link_underline');
}