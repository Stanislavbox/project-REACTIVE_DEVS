import axios from 'axios';

export async function getSelectedBooks(category) {
  try {
    const { data } = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${category}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
