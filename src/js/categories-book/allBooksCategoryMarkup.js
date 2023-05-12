import { createBookMarkup } from './oneBookMarkup';

export function createCategoryBooksMarkup(data) {
  return `
      <ul class="category-books-list">
        ${data
          .map(element => {
            return `
            <li class="books-list-item">
              ${createBookMarkup(element)}
            </li>
          `;
          })
          .join('')}
      </ul>
    `;
}
