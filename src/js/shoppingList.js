import { Notify } from "notiflix";
import storage from './storage';
import { LOCALSTORAGE_SHOPPING_LIST_KEY, getBooksById, removeLocalStorageBook } from "./popup";
import { spinnerFoo } from "./spinner";


const refs = {
    shopListEmpty: document.querySelector(".shopping-list-empty"),   
    shopList: document.querySelector("#booksShopingList"),  
    startMarkup: `<p class="shopping-list-empty-message">
    This page is empty, add some books and proceed to order.
  </p>
  <picture class="shopping-list-empty-img">
    <source
      srcset="./img/books@2x.png 1x, ./img/books@2x.png 2x"
      media="(min-width:1440px)"
    />
    <source
      srcset="./img/books@2x.png 1x, ./img/books@2x.png 2x"
      media="(min-width:768px)"
    />
    <source
      srcset="./img/books.png 1x, ./img/books.png 2x"
      media="(max-width:767px)"
    />
    <img src="./img/books.png" alt="books" />
  </picture>`,
   arrBtnsID: [],
}

let arrOfBooksId = storage.load(LOCALSTORAGE_SHOPPING_LIST_KEY);
// Управляет рендером стартовым
export async function createShopingListMarkup() {
  // Перевірка на наявність ключа в ЛокСховищі та на наявність в ньому ID-шників;
    if (!arrOfBooksId) {
    refs.shopList.style.display = "none";
    spinnerFoo();    
    return refs.shopListEmpty.insertAdjacentHTML('beforeend', refs.startMarkup);
  } else if (!JSON.parse(arrOfBooksId).length) {
    refs.shopList.style.display = "none";
    spinnerFoo();
    return refs.shopListEmpty.insertAdjacentHTML('beforeend', refs.startMarkup);
  }
 
    // Ренндер списку книг в Shopping List  
  refs.shopList.style.display = "flex";
  arrOfBooksId = JSON.parse(arrOfBooksId);    

  try {
      let arrData = [];
    // Отримання данних с бекненду
      for (let i = 0; i < arrOfBooksId.length; i +=1) {
        const resp = await getBooksById(arrOfBooksId[i]);
        arrData.push(resp);
      }  
    

      const markup = arrData.map(({ _id, author, book_image, description, title, list_name }) => {
        return `<li class="sh-list-item">               
                    <img class="sh-list-book-img" src="${book_image}"" alt="Book's cover. ${title}" />
                    <div class="sh-list-item-main-wrapper">
                       <div class="sh-list-item-top-wrapper">
                         <div class="sh-list-titles">
                           <h2 class="sh-list-book-title">${title}</h2>
                           <h3 class="sh-list-book-category">${list_name}</h3>
                         </div>                      
                       <button class="sh-list-btn" data_id="${_id}" type="button">
                         <svg class="sh-list-icon" width="16" height="16">
                           <use href="./img/sprite.svg#icon-trash"></use>
                         </svg>
                       </button>
                    </div>                       
                    <p class="sh-list-book-descr">${description}</p>
                    <div class="sh-list-item-bottom-wrapper">
                       <h3 class="sh-list-book-author">${author}</h3>
                       <ul class="sh-list-shops-list">
                         <li class="sh-list-shops-list-item">
                           <a href="" class="sh-list-shops-link sh-list-shops-amazon"></a>
                         </li>
                         <li class="sh-list-shops-list-item">
                            <a href="" class="sh-list-shops-link sh-list-shops-apple"></a>
                         </li>
                         <li class="sh-list-shops-list-item">
                           <a href="" class="sh-list-shops-link sh-list-shops-bs"></a>
                         </li>
                       </ul>
                    </div>                   
                  </div>
                </li>`
    }).join('');
    spinnerFoo();
    refs.shopList.innerHTML = markup;  
    arrOfBooksId.forEach(id => document.querySelector(`[data_id="${id}"]`).addEventListener("click", removeFromShopingList));
        
  } catch (error) {    
        Notify.failure(error.message);
    }    
}

async function removeFromShopingList(event) {
  spinnerFoo()
  removeLocalStorageBook(event);  
  // arrOfBooksId.forEach(id => document.querySelector(`[data_id="${id}"]`).removeEventListener("click", removeFromShopingList));  
  arrOfBooksId = storage.load(LOCALSTORAGE_SHOPPING_LIST_KEY); 
  if (JSON.parse(arrOfBooksId).length) {
    event.currentTarget.closest('.sh-list-item').style.display = "none"
    spinnerFoo();
    return
  }
  refs.shopList.innerHTML = "";
  refs.shopList.style.display = "none";  
  refs.shopListEmpty.innerHTML = refs.startMarkup;
  spinnerFoo();
}





