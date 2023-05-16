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
    <img src="./images/books-mob-min.png" alt="books" />
  </picture>`
}

// Управляет рендером стартовым
export async function createShopingListMarkup() {
    
    let arrOfBooksId = storage.load(LOCALSTORAGE_SHOPPING_LIST_KEY);
    if ((!JSON.parse(arrOfBooksId).length) > 0 || !arrOfBooksId) {        
        // базовая пустая разметка
      spinnerFoo()
       return refs.shopListEmpty.insertAdjacentHTML('beforeend', refs.startMarkup)
    }

    refs.shopListEmpty.style.display = "none";
    arrOfBooksId = JSON.parse(arrOfBooksId);    

    try {
        
    } catch (error) {
        Notify.failure(error.message);
    }
    let arrData = [];

    for (let i = 0; i < arrOfBooksId.length; i +=1) {
        const resp = await getBooksById(arrOfBooksId[i]);
        arrData.push(resp);
    }   

    const markup = arrData.map(({ _id, author, book_image, description, title }) => {
        return `<button class="popup-book-close-btn js-popup-close" data_id=${_id} type="button">
      <svg class="popup-book-close-icon js-popup-close" width="24" height="24">
        <use class="js-popup-close" href="./img/sprite.svg#icon-shopping"></use>
      </svg>
    </button>
    <div class="popup-book-wrapper">
      <img class="popup-book-cover" src="${book_image}"" alt="Book's cover. ${title}" />
      <div class="popup-book-inner">
        <h2 class="popup-book-title">${title}</h2>
        <h3 class="popup-book-author">${author}</h3>
        <p class="popup-book-description">${description}</p>
        <ul class="list popup-book-shops-list">
          <li class="popup-book-shops-item">
            <a
              href=""
              class="popup-book-shops-link popup-shop-icon-rectungular popup-shop-amazon"
            ></a>
          </li>
          <li class="popup-book-shops-item">
            <a
              href=""
              class="popup-book-shops-link popup-shop-icon-sqr popup-shop-apple"
            ></a>
          </li>
          <li class="popup-book-shops-item">
            <a
              href=""
              class="popup-book-shops-link popup-shop-icon-sqr popup-shop-bs"
            ></a>
          </li>
        </ul>
      </div>
    </div>`
    }).join('');
    spinnerFoo()
    refs.shopList.insertAdjacentHTML("beforeend", markup);
}




// const easyPagination = ({
//     items,
//     rows = 10,
//     handlePaginatedItems,
//     buttonsWrapper,
//     buttonsContainerClass = 'pagination',
//     buttonClass = 'page-link',
//     nextClass = 'page-link',
//     prevClass = 'page-link',
//     nextText = '>',
//     prevText = '<',
//     firstClass = 'page-link',
//     firstText = '<<',
//     lastClass = 'page-link',
//     lastText = '>>',
//     activeClass = 'active',
//   }) => {
//     if (!items) {
//       console.error('items not defined. Send {items: ...} as a parameter.');
//       return false;
//     }
  
//     const generateUID = () => {
//       var firstPart = (Math.random() * 46656) | 0;
//       var secondPart = (Math.random() * 46656) | 0;
//       firstPart = ('000' + firstPart.toString(36)).slice(-3);
//       secondPart = ('000' + secondPart.toString(36)).slice(-3);
//       return firstPart + secondPart;
//     };
  
//     const createPaginationButtons = ({ wrapper }) => {
//       let paginationButtons = document.createElement('div');
  
//       paginationButtons.classList.add(
//         'pagination-' + uuid,
//         buttonsContainerClass
//       );
  
//       let paginationButton = page => {
//         let button = document.createElement('button');
//         button.setAttribute('type', 'button');
//         button.classList.add(buttonClass);
  
//         if (currentPage === page) button.classList.add(activeClass);
  
//         button.innerHTML = page;
  
//         button.addEventListener('click', function () {
//           currentPage = page;
  
//           self.paginate(currentPage, false);
  
//           let current_btn = getActiveBtn();
//           current_btn.classList.remove('active');
  
//           button.classList.add('active');
//         });
  
//         return button;
//       };
  
//       let prevNextBtns = () => {
//         let prevBtn = document.createElement('button');
//         prevBtn.setAttribute('type', 'button');
//         prevBtn.classList.add('page-link');
//         prevBtn.classList.add('prevClass');
//         prevBtn.innerHTML = prevText;
  
//         let nextBtn = document.createElement('button');
//         nextBtn.setAttribute('type', 'button');
//         nextBtn.classList.add('page-link');
//         nextBtn.classList.add('nextClass');
//         nextBtn.innerHTML = nextText;
  
       
//         prevBtn.addEventListener('click', () => {
//           self.prev();
//         });
  
//         nextBtn.addEventListener('click', () => {
//           self.next();
//         });
  
      
  
//         return { prevBtn, nextBtn };
//       };
  
//       const { prevBtn, nextBtn } = prevNextBtns();
  
//       // paginationButtons.appendChild(firstBtn);
//       paginationButtons.appendChild(prevBtn);
  
//       for (let i = 1; i < pageCount + 1; i++) {
//         let btn = paginationButton(i);
//         paginationButtons.appendChild(btn);
//       }
  
//       paginationButtons.appendChild(nextBtn);
//       // paginationButtons.appendChild(lastBtn);
  
//       wrapper.appendChild(paginationButtons);
//     };
  
//     const getAllBtns = () => {
//       return document.querySelectorAll(`.${'pagination-' + uuid} button`);
//     };
  
//     const getActiveBtn = () => {
//       return document.querySelector(`.${'pagination-' + uuid} button.active`);
//     };
  
//     const uuid = generateUID();
//     rows = parseInt(rows);
//     let currentPage = 1;
//     let pageCount = Math.ceil(items.length / rows);
//     const hasButtons = typeof buttonsWrapper != 'undefined';
  
//     const self = {
//       paginate: (page = 1, loadButtons = true) => {
//         page--;
  
//         let start = rows * page;
//         let end = start + rows;
//         let paginatedItems = items.slice(start, end);
  
//         if (loadButtons && buttonsWrapper)
//           createPaginationButtons({
//             wrapper: document.querySelector(buttonsWrapper),
//           });
  
//         if (handlePaginatedItems) {
//           handlePaginatedItems(paginatedItems);
//         } else return paginatedItems;
//       },
      
//       next: () => {
//         if (currentPage >= pageCount) return;
//         currentPage++;
//         let page = currentPage - 1;
//         let start = rows * page;
//         let end = start + rows;
//         let paginatedItems = items.slice(start, end);
  
//         if (hasButtons) {
//           let current_btn = getActiveBtn();
//           current_btn.classList.remove('active');
//           current_btn.nextElementSibling.classList.add('active');
//         }
  
//         if (handlePaginatedItems) {
//           handlePaginatedItems(paginatedItems);
//         } else return paginatedItems;
//       },
//       prev: () => {
//         if (currentPage === 1) return;
//         currentPage--;
  
//         let page = currentPage - 1;
//         let start = rows * page;
//         let end = start + rows;
//         let paginatedItems = items.slice(start, end);
  
//         if (hasButtons) {
//           let currentButton = getActiveBtn();
//           currentButton.classList.remove('active');
//           currentButton.previousElementSibling.classList.add('active');
//         }
  
//         if (handlePaginatedItems) {
//           handlePaginatedItems(paginatedItems);
//         } else return paginatedItems;
//       },
//       changeRows: (newRows = 10) => {
//         rows = parseInt(newRows);
//         document.querySelector('.pagination-' + uuid).remove();
//         self.paginate(currentPage);
//       },
//       changeItems: newItems => {
//         if (!newItems) return false;
  
//         document.querySelector('.pagination-' + uuid)?.remove();
  
//         items = newItems;
//         pageCount = Math.ceil(items.length / rows);
//         currentPage = 1;
  
//         self.paginate(1);
//       },
//     };
  
//     return self;
//   };




// appendShoppingListMarkup();

// function createShoppingList(books) {
//   return books.reduce((acc, item) => {
//     return (
//       acc +
//       ` <div class="shopping-card" id="">
//         <div class="shopping-list-img">
//         <img
//           class="book-shopping-img"
//           src=""
//           alt=""
//           loading="lazy"
//         />
//       </div>
//       <div class="info">
//         <div class="first-info-div">
//           <div>
//             <p class="book-shopping-name"></p>
//             <p class=".book-shopping-category">$</p>
//           </div>
//           <button class="remove-shopping-book">
//             <svg class="trash-icon" width="16" height="16"><use href="#icon-trash"></use></svg>
//           </button>
//         </div>
//         <div class="second-info-div">
//           <p class="book-shopping-description">
       
//           </p>
//         </div>
//         <div class="third-info-div">
//           <div>
//             <p class="book-author">
      
//             </p>
//           </div>
//           <div class="shop-list-div">
//           <ul class="shop-list">
//                <li class="shop-item">
//               <a class="shop-link" href=" target="_blank"><img class="" src="" alt="" width="32" height="11"></a>
//               </li>
//                 <li class="shop-item">
//                     <a class="shop-link" href="" target="_blank"><img class="" src="" alt="" width="16" height="16"></a>
//                   </li>
//                     <li class="shop-item">
//                         <a class="shop-link" href="" target="_blank" ><img class="" src="" alt="" width="16" height="16"></a>
//                       </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>`
//     );
//   }, '');
// }


