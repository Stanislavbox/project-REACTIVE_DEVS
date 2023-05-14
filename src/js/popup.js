import axios from 'axios';
import storage from './storage';

const instanceAxios = axios.create({
  baseURL: 'https://books-backend.p.goit.global/books/',
});

const refs = {
  bodyEl: document.querySelector("body"),
  modalBook: document.querySelector(".popup-backdrop"),
  coverBook: document.querySelector(".popup-book-cover"),
  titleBook: document.querySelector(".popup-book-title"),
  authorBook: document.querySelector(".popup-book-author"),
  descrBook: document.querySelector(".popup-book-description"),
  popUpBtn: document.querySelector(".popup-book-btn"),
  popUpNotice: document.querySelector(".popup-book-notice"),
}

const LOCALSTORAGE_SHOPPING_LIST_KEY = "booksShopingList";

// refs.bodyEl.addEventListener("click", popUpModal);





async function getBooks(id) {
  try {
    const response = await instanceAxios.get(`${id}`);
    return (response.data)
    
  } catch (error) {
    console.log(error)
  }
}


export async function popUpModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'LI') {
    return;
  };
  
  refs.modalBook.classList.remove("is-hidden")

  const closing = event => {
    if (event.key === 'Escape' ||
      event.target.classList.contains("js-popup-close") ||
      event.target.classList.contains("popup-backdrop")) {
      
      refs.bodyEl.removeEventListener('keydown', closing);
      refs.bodyEl.removeEventListener('click', closing);
      refs.bodyEl.classList.remove("fixed-background");
      refs.modalBook.removeEventListener('click', closing);
      refs.modalBook.classList.add("is-hidden");
    }
    return;
  };

  refs.bodyEl.addEventListener('keydown', closing);
  refs.bodyEl.addEventListener('click', closing);
  refs.modalBook.addEventListener('click', closing);  

  refs.bodyEl.classList.add("fixed-background");

  const arrBooksID = storage.load(LOCALSTORAGE_SHOPPING_LIST_KEY)

  if (!arrBooksID) {
    refs.popUpBtn.textContent = "add to shopping list";
    refs.popUpNotice.style.display = "none"
  } else if (JSON.arrBooksID.length) {
    
  }

  const { author, book_image, description, title } = await getBooks("643282b1e85766588626a080");
  
  refs.coverBook.setAttribute("src", `${book_image}`);
  refs.titleBook.textContent = `${title}`;
  refs.authorBook.textContent = `${author}`;
  if (description) {
    refs.descrBook.textContent = `${description}`;
  }

  
  // storage.save(LOCALSTORAGE_SHOPPING_LIST_KEY, JSON.stringify([]));
  // console.log(shoppingListMngmnt("643282b1e85766588626a080", LOCALSTORAGE_SHOPPING_LIST_KEY));
// JSON.parse(storage.load(LOCALSTORAGE_SHOPPING_LIST_KEY)).length
  // console.log(JSON.parse(storage.load(LOCALSTORAGE_SHOPPING_LIST_KEY)).length)
}

// function shoppingListMngmnt(bookId, key) {
//   if (storage.load(key)) {
//     const arrBooksID = JSON.parse(storage.load(key));
//     if (arrBooksID.length)
    
//     return arrBooksID.find(bookId)
//   }  
// }