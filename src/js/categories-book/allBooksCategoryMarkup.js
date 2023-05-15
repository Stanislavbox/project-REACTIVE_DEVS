import { createBookMarkup } from './oneBookMarkup';

export function createCategoryBooksMarkup(data) {
  return `
      <ul class="category-books-list">
        ${data
          .map(element => {
            return `
              ${createBookMarkup(element)}
          `;
          })
          .join('')}
      </ul>
    `;
}
