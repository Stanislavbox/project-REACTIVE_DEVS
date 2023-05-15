export function createBookMarkup({
  _id: id,
  title,
  author,
  description,
  book_image: image,
  // book_image_width: width,
  // book_image_height: height,
}) {
  return `
  <li class="books-list-item" data_id=${id}>
    <div class="book-wrap">
      <div class="book-thumb">
        <img class="book-image" src="${image}" loading="lazy" alt="${description}"/>
        <div class="book-image-overlay" aria-label="${title}">
          <p class="book-image-overlay-text">Quick view</p>
        </div>
      </div>
      <div class="book-item-meta">
        <h3 class="book-title">${title}</h3>
        <p class="book-author">${author}</p>
      </div>
    </div>
    </li>
  `;
}
