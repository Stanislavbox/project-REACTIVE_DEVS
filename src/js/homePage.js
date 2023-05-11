import axios from 'axios';

// const listOfBooks = document.querySelector('.js-container');
// const TOP_BOOKS = 'https://books-backend.p.goit.global/books/top-books';

// getTopBooks(TOP_BOOKS)
//   .then(resp => listOfBooks.insertAdjacentHTML('afterbegin', resp))
//   .catch();

export async function getTopBooks(TOP_BOOKS) {
  const response = await axios.get(TOP_BOOKS);
  const data = response.data;
  const topBooks = data
    .map(({ list_name, books }) => {
      return `<div class = "category-container"><h2 class="home-book-category">${list_name}</h2>
        <ul class="books-list">
                <li class="book-item">
                <div class = "overlay"></div>
                    <img class = "book-img" src="${books[0].book_image}" alt="Poster of ${books[0].title}" width="180" height="256" />
                    <h3 class="book-name">${books[0].title}</h3>
                    <p class="author-name">${books[0].author}</p>
                </li>
                <li class="book-item">
                    <img class = "book-img" src="${books[1].book_image}" alt="Poster of ${books[1].title}" width="180" height="256" />
                    <h3 class="book-name">${books[1].title}</h3>
                    <p class="author-name">${books[1].author}</p>
                </li>
                <li class="book-item">
                    <img class = "book-img" src="${books[2].book_image}" alt="Poster of ${books[2].title}" width="180" height="256" />
                    <h3 class="book-name">${books[2].title}</h3>
                    <p class="author-name">${books[2].author}</p>
                </li>
                <li class="book-item">
                    <img class = "book-img" src="${books[3].book_image}" alt="Poster of ${books[3].title}" width="180" height="256" />
                    <h3 class="book-name">${books[3].title}</h3>
                    <p class="author-name">${books[3].author}</p>
                </li>
                <li class="book-item">
                    <img class = "book-img" src="${books[4].book_image}" alt="Poster of ${books[4].title}" width="180" height="256" />
                    <h3 class="book-name">${books[4].title}</h3>
                    <p class="author-name">${books[4].author}</p>
                </li>
        </ul> <button class="btn-see-more" type="button">SEE MORE</button></div>`;
    })
    .join('');
  console.log(topBooks);
  return topBooks;
}
