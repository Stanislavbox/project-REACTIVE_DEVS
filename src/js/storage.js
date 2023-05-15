import { Notify } from "notiflix";

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
      Notify.failure(error.message);    
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
      Notify.failure(error.message);    
  }
};

const remove = key => {
    try {
       localStorage.removeItem(key) 
    } catch (error) {
        Notify.failure(error.message)        
    }
}

export default {
    save,
    load,
  remove,
};