import { getCategoriesArray } from './getCategoriesArray';

const categoryListEl = document.querySelector('.categories-list');

export async function renderCategoriesListMarkUp() {
  try {
    const arrayOfCategories = await getCategoriesArray();

    arrayOfCategories.forEach(dataItem => {
      const { list_name } = dataItem;

      const htmlCategoriesList = `<li class="categories-list-item">
  <button type="button" class="category-btn" data-id="${dataItem.list_name}">${dataItem.list_name}</button>
</li>`;

      categoryListEl.innerHTML += `${htmlCategoriesList}`;
    });
  } catch (error) {
    console.log(error);
  }
}

renderCategoriesListMarkUp();
