import axios from 'axios';
import { Notify } from 'notiflix';

export async function getCategoriesArray() {
  try {
    const { data } = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );
    return data;
  } catch (error) {
    Notify.failure('Sorry, there is nothing here. Try again later.');
  }
}
