import { Notify } from "notiflix";
import storage from './storage';
import { LOCALSTORAGE_SHOPPING_LIST_KEY, getBooksById, removeLocalStorageBook } from "./popup";
import { spinnerFoo } from "./spinner";


const refs = {
    shopListEmpty: document.querySelector(".shopping-list-empty"),
    shopListWrapper: document.querySelector(".shopping-list-card"),
  shopList: document.querySelector("#booksShopingList"),    
    startMarkup: `<p class="shopping-list-empty-message">
    This page is empty, add some books and proceed to order.
  </p>
  <picture class="shopping-list-empty-img">
    <source
      srcset="${import.meta.env.BASE_URL}img/books.png 1x, ${import.meta.env.BASE_URL}img/books.png 2x"
      media="(min-width:1440px)"
    />
    <source
      srcset="${import.meta.env.BASE_URL}img/books.png 1x, ${import.meta.env.BASE_URL}img/books.png 2x"
      media="(min-width:768px)"
    />
    <source
      srcset="${import.meta.env.BASE_URL}img/books.png 1x, ${import.meta.env.BASE_URL}img/books.png 2x"
      media="(max-width:767px)"
    />
    <img :src="${import.meta.env.BASE_URL}img/books.png" alt="books" />
  </picture>`,
   arrBtnsID: [],
}

// `${import.meta.env.BASE_URL}img/books.png`

// Управляет рендером стартовым
export async function createShopingListMarkup() {
    
  let arrOfBooksId = storage.load(LOCALSTORAGE_SHOPPING_LIST_KEY);

  if (!arrOfBooksId) {
    spinnerFoo()
    return refs.shopListEmpty.insertAdjacentHTML('beforeend', refs.startMarkup)
  } else if (!JSON.parse(arrOfBooksId).length) {
    spinnerFoo()
    return refs.shopListEmpty.insertAdjacentHTML('beforeend', refs.startMarkup)
  }
 
    
    refs.shopListEmpty.style.display = "none";
    arrOfBooksId = JSON.parse(arrOfBooksId);    

  try {
      let arrData = [];

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
                           <use href="src/img/sprite.svg#icon-trash"></use>
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
    refs.shopList.insertAdjacentHTML("beforeend", markup);
    const shopListRemoveBtn = document.querySelectorAll('.sh-list-btn');

    
    shopListRemoveBtn.forEach(btn => refs.arrBtnsID.push(Object.values(btn.attributes).find(item => item.nodeName === "data_id").value));
    refs.arrBtnsID.forEach(id => document.querySelector(`[data_id="${id}"]`).addEventListener("click", removeFromShopingList));
    console.log(refs.arrBtnsID);    
  } catch (error) {   
        Notify.failure(error.message);
    }    
}

async function removeFromShopingList(event) {
  removeLocalStorageBook(event);
  refs.arrBtnsID.forEach(id => document.querySelector(`[data_id="${id}"]`).removeEventListener("click", removeFromShopingList));
  refs.arrBtnsID = [];
  await createShopingListMarkup();  
}





