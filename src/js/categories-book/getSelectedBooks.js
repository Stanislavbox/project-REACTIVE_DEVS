import axios from 'axios';
import { Notify } from 'notiflix';

export async function getSelectedBooks(category) {
  try {
    const { data } = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${category}`
    );
    return data;
  } catch (error) {
    Notify.failure('Sorry, there is nothing here. Try again later.');
  }
}
