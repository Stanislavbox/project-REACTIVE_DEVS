import axios from 'axios';

export async function getCategoriesArray() {
  try {
    const { data } = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
