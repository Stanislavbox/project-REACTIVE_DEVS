import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBcc1DA6ZvhYH6HNL0bBHQ0dDKoHx7bVFo',
  authDomain: 'goit-77-team-1-books-project.firebaseapp.com',
  projectId: 'goit-77-team-1-books-project',
  storageBucket: 'goit-77-team-1-books-project.appspot.com',
  messagingSenderId: '665612464460',
  appId: '1:665612464460:web:7e87cc8c9c9cb455a91fe9',
  measurementId: 'G-JWPP6GW2CN',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signUpName = document.getElementById('sign_up_name');
const signUpEmail = document.getElementById('sign_up_email');
const signInEmail = document.getElementById('sign_in_email');
const signUpPassword = document.getElementById('sign_up_password');
const signInPassword = document.getElementById('sign_in_password');
const userBlock = document.querySelector('.header__username');

export function registration(event) {
  event.preventDefault();
  const email = signUpEmail.value;
  const password = signUpPassword.value;
  const name = signUpName.value;
  if (!email || !password || !name) {
    alert('Всі поля мають бути заповнені!');
    return;
  }

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      userBlock.textContent = user.email;
      localStorage.setItem('user', JSON.stringify(user));
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
  const email = signInEmail.value;
  const password = signInPassword.value;

  if (!email || !password) {
    alert('Всі поля мають бути засіяні!');
    return;
  }
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem('user', JSON.stringify(user));
      // ...
      console.log(user);
      userBlock.textContent = user.email;
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
      // Відновлення користувача після перезавантаження сторінки
      console.log(user);
      userBlock.textContent = user.email;
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
    })
    .catch(error => {
      console.log('Помилка при виході:', error);
    });
}
