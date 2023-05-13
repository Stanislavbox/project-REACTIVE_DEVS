const renderingContainer = document.querySelector('.js-container');

import { createCategoryBooksMarkup } from './allBooksCategoryMarkup';

export function renderBooksByCategory(data) {
  const markup = createCategoryBooksMarkup(data);
  renderingContainer.innerHTML = markup;
}
