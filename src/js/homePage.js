import axios from 'axios';
// import { data } from 'jquery';
// import { homePage } from './root';

export async function getTopBooks(TOP_BOOKS, numCardsToRender) {
  const response = await axios.get(TOP_BOOKS);
  const data = response.data;
  const topBooks = data
    .map(obj => {
      return `<div class = "category-container"><h2 class="home-book-category">${obj.list_name}</h2>
      <ul class="books-list js-book-list">
              ${obj.books.slice(0, numCardsToRender).map(
                ({ title, book_image, author, _id }) => `<li class="book-item"  data_id=${_id}>
                      <div class ="img-wrapper">
                          <img class = "book-img" src="${book_image}" alt="Poster of ${title}" loading="lazy" />
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
// let currentPage = 3;
// let arrBooks = [];
// let observer = new IntersectionObserver(loadMore, options);
// var options = {
//   root: null,
//   rootMargin: '200px',
//   threshold: 1.0
// }

// export async function getTopBooks(TOP_BOOKS, numCardsToRender) {
//   const response = await axios.get(TOP_BOOKS);
//   const data = response.data;
  
//   for (let index = 0; index < currentPage; index++) {
//     console.log(data[index])
//     arrBooks.push(data[index])
//   }
//   console.log(index)
//   const topBooks = arrBooks
//     .map(obj => {
//       return `<div class = "category-container"><h2 class="home-book-category">${obj.list_name}</h2>
//       <ul class="books-list js-book-list">
//               ${obj.books.slice(0, numCardsToRender).map(
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

// const target = document.querySelector('.js-guard')

// let numCardsToRender = 1;

// if (window.innerWidth < 767) {
//   numCardsToRender = 1;
// } else if (window.innerWidth < 1439) {
//   numCardsToRender = 3;
// } else {
//   numCardsToRender = 5;
// }

// export function loadMore(entries, observer){
//   entries.forEach(entry => {
//     console.log(entry)
//     if(entry.isIntersecting){
//       getMoreBooks(homePage.TOP_BOOKS, numCardsToRender).then(resp => {
    
//         homePage.listOfBooks.insertAdjacentHTML('afterbegin', resp);
//         observer.observe(homePage.target)
//         spinnerFoo();
//       })
//       .catch(error =>
//         Notify.failure('Sorry, there is nothing here. Try again later.')
//       )
//       .finally(() => addBookListListeners());
//     }
//   });
// }

// async function getMoreBooks(TOP_BOOKS, numCardsToRender){
//   const response = await axios.get(TOP_BOOKS);
//   const data = response.data;
  
//   for (let index = 4; index < currentPage; index++) {
//     console.log(data[index])
//     arrBooks.push(data[index])
//     if(index===currentPage){
//       index=currentPage
//       console.log([index])
//     }
//   }
//   console.log(index)
//   const topBooks = arrBooks
//     .map(obj => {
//       return `<div class = "category-container"><h2 class="home-book-category">${obj.list_name}</h2>
//       <ul class="books-list js-book-list">
//               ${obj.books.slice(0, numCardsToRender).map(
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