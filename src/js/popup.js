import axios from 'axios';
import storage from './storage';
import { Notify } from 'notiflix';

const instanceAxios = axios.create({
  baseURL: 'https://books-backend.p.goit.global/books/',
});
// =======================Добавить На ЛИ сласс .js-book-item
const refs = {
  bodyEl: document.querySelector("body"),
  bookItemEl: document.querySelectorAll(".book-item"),
  modalBook: document.querySelector(".popup-backdrop"),
  coverBook: document.querySelector(".popup-book-cover"),
  titleBook: document.querySelector(".popup-book-title"),
  authorBook: document.querySelector(".popup-book-author"),
  descrBook: document.querySelector(".popup-book-description"),
  popUpBtn: document.querySelector(".popup-book-btn"),
  popUpNotice: document.querySelector(".popup-book-notice"),
}

const LOCALSTORAGE_SHOPPING_LIST_KEY = "booksShopingList";





async function getBooksById(id) {
  try {
    const response = await instanceAxios.get(`${id}`);
    return (response.data)

  } catch (error) {
    console.log(error)
  }
}


export async function popUpModal(event) {
  event.preventDefault();
  if (event.target.nodeName === "UL") {
    return
  }
   const bookId = event.target.getAttribute("data_id")
  

  refs.modalBook.classList.remove("popup-is-hidden");
  refs.modalBook.firstElementChild.classList.remove("popup-is-hidden");

  const closing = event => {
    if (event.key === 'Escape' ||
      event.target.classList.contains("js-popup-close") ||
      event.target.classList.contains("popup-backdrop")) {
      // ВИДАЛЕННЯ СЛУХАЧІВ
      refs.bodyEl.removeEventListener('keydown', closing);
      refs.bodyEl.removeEventListener('click', closing);      
      refs.modalBook.removeEventListener('click', closing);
      refs.popUpBtn.removeEventListener('click', shoppingListMngmnt);
      // Закриття POPUP
      refs.modalBook.classList.add("popup-is-hidden");
      refs.modalBook.firstElementChild.classList.add("popup-is-hidden");
      refs.bodyEl.classList.remove("fixed-background");
      // Видалення Атрибутів
      refs.popUpBtn.removeAttribute("data_id");
    }
    return;
  };

  refs.popUpBtn.setAttribute("data_id", bookId);

  refs.bodyEl.addEventListener('keydown', closing);
  refs.bodyEl.addEventListener('click', closing);
  refs.modalBook.addEventListener('click', closing);
  refs.popUpBtn.addEventListener('click', shoppingListMngmnt);
  

  refs.bodyEl.classList.add("fixed-background");

  let arrBooksID = storage.load(LOCALSTORAGE_SHOPPING_LIST_KEY);

  if (!arrBooksID || !JSON.parse(arrBooksID).length) {
    refs.popUpBtn.textContent = "add to shopping list";
    refs.popUpNotice.style.display = "none";
    arrBooksID = [];
  } else if (!JSON.parse(arrBooksID).includes(bookId)) {
    refs.popUpBtn.textContent = "add to shopping list";
    refs.popUpNotice.style.display = "none";
    arrBooksID = JSON.parse(arrBooksID);    
  } else { 
    refs.popUpBtn.textContent = "remove from the shopping list";
    refs.popUpNotice.style.display = "block";
  }


  try {

  const { author, book_image, description, title } = await getBooksById(bookId);
  refs.coverBook.setAttribute("src", `${book_image}`);
  refs.titleBook.textContent = `${title}`;
  refs.authorBook.textContent = `${author}`;
  if (description) {
    refs.descrBook.textContent = `${description}`;
    } 
    
  } catch (error) {
    Notify.failure(error.message)  
}
   
}



function shoppingListMngmnt(event) { 
  if (refs.popUpBtn.textContent.includes("add")) {
    addLocalStorageBook(event);
    refs.popUpBtn.textContent = "remove from the shopping list";
    refs.popUpNotice.style.display = "block";
    return
  }  
  removeLocalStorageBook(event);
  refs.popUpBtn.textContent = "add to shopping list";
  refs.popUpNotice.style.display = "none";
}

export function removeLocalStorageBook(event) {
  const id = event.currentTarget.getAttribute("data_id");
  const books = JSON.parse(storage.load(LOCALSTORAGE_SHOPPING_LIST_KEY));
  books.splice(books.indexOf(id), 1);
  storage.save(LOCALSTORAGE_SHOPPING_LIST_KEY, JSON.stringify(books));
}

export function addLocalStorageBook(event) {
  const id = event.currentTarget.getAttribute("data_id");
  let books = storage.load(LOCALSTORAGE_SHOPPING_LIST_KEY);
  if (books && JSON.parse(books).length) {
    books = JSON.parse(books);
  } else {
    books = [];
  }  
  books.splice(0, 0, id);
  storage.save(LOCALSTORAGE_SHOPPING_LIST_KEY, JSON.stringify(books));
}

export function addBookListListeners() {
  const booksList = document.querySelectorAll(".js-book-list");
    if (booksList.length) {
      booksList.forEach(element =>
        element.addEventListener('click', popUpModal))
    }
}

export function removeBookListListeners() {
  const booksList = document.querySelectorAll(".js-book-list");
    if (booksList.length) {
      booksList.forEach(element =>
        element.removeEventListener('click', popUpModal))
    }
}