import axios from 'axios';
import { Notify } from 'notiflix';

import { homePage } from './root';
import { addBookListListeners } from './popup';

// export async function getTopBooks(TOP_BOOKS) {
//   const response = await axios.get(TOP_BOOKS);
//   const data = response.data;
//   const topBooks = data
//     .map(obj => {
//       return `<div class = "category-container"><h2 class="home-book-category">${obj.list_name}</h2>
//       <ul class="books-list js-book-list">
//               ${obj.books.map(
//                 ({ title, book_image, author, _id }) => `<li class="book-item"  data_id=${_id}>
//                       <div class ="img-wrapper">
//                           <img class = "book-img" src="${book_image}" alt="Poster of ${title}"/>
//                           <a class = "overlay" href="http://"><span class = "text-overlay">QUICK VIEW</span></a>
//                       </div>
//                           <h3 class="book-name">${title}</h3>
//                           <p class="author-name">${author}</p></li>`
//               ).join('')}
//               </ul><button class="btn-see-more" type="button" data-id="${obj.list_name}">SEE MORE</button></div>`
//     })
//     .join('');

//   return topBooks;
// }





let booksToRender = 2;
let bookIndex = 0
let arrBooks = [];


export async function getTopBooks(TOP_BOOKS) {
  const response = await axios.get(TOP_BOOKS);
  const data = response.data;
  
  for (let index = bookIndex; index < booksToRender; index += 1) {
    arrBooks.push(data[index]);
  }
  booksToRender += 2
  bookIndex+=2
  const topBooks = arrBooks
    .map(obj => {
      return `<div class = "category-container"><h2 class="home-book-category">${obj.list_name}</h2>
      <ul class="books-list js-book-list">
              ${obj.books.map(
                ({ title, book_image, author, _id }) => `<li class="book-item"  data_id=${_id}>
                      <div class ="img-wrapper">
                          <img class = "book-img" src="${book_image}" alt="Poster of ${title}"/>
                          <a class = "overlay" href="http://"><span class = "text-overlay">QUICK VIEW</span></a>
                      </div>
                          <h3 class="book-name">${title}</h3>
                          <p class="author-name">${author}</p></li>`
              ).join('')}
              </ul><button class="btn-see-more" type="button" data-id="${obj.list_name}">SEE MORE</button></div>`
    })
    .join('');

  return topBooks;
}




export function loadMore(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      getMoreBooks(homePage.TOP_BOOKS).then(resp => {
        homePage.listOfBooks.insertAdjacentHTML('beforeend', resp);
        
        observer.observe(homePage.target)
        // spinnerFoo();
      })
        .catch(error => {
          console.log(error);
          Notify.failure('Sorry, there is nothing here. Try again later.')})
      .finally(() => addBookListListeners());
    }
  });
}

async function getMoreBooks(TOP_BOOKS){
  const response = await axios.get(TOP_BOOKS);
  const data = response.data;
  for (let index = bookIndex; index < booksToRender; index += 1) {
    
    if (arrBooks.length === 17) {
      observer.unobserve(homePage.target);
      Notify.warning(
        "We are sorry, but you've reached the end of the list of books. "
      );
    }

    arrBooks.push(data[index]);
  }

  const topBooks = arrBooks
    .slice(bookIndex, booksToRender)
    .map(obj => {
      return `<div class = "category-container"><h2 class="home-book-category">${
        obj.list_name
      }</h2>
      <ul class="books-list js-book-list">
              ${obj.books
                .map(
                  ({
                    title,
                    book_image,
                    author,
                    _id,
                  }) => `<li class="book-item"  data_id=${_id}>
                      <div class ="img-wrapper">
                          <img class = "book-img" src="${book_image}" alt="Poster of ${title}"/>
                          <a class = "overlay" href="http://"><span class = "text-overlay">QUICK VIEW</span></a>
                      </div>
                          <h3 class="book-name">${title}</h3>
                          <p class="author-name">${author}</p></li>`
                )
                .join('')}
              </ul><button class="btn-see-more" type="button" data-id="${
                obj.list_name
              }">SEE MORE</button></div>`;
    })
    .join('');
  
   booksToRender += 2;
   bookIndex += 2;

  return topBooks;
}