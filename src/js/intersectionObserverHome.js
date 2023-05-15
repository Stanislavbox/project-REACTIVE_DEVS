// import { homePage } from "./root";


// export function loadMoreCategories() {
//     let categoriesRendered = 3;
  
//   const visibleCategories = document.querySelectorAll(
//     '.category-container:not(.hidden)'
//   );

//   // Check if there are more categories to render
//   if (categoriesRendered >= homePage.categories.length) {
//     observer.disconnect();
//     return;
//   }

//   // Render the next three categories
//   for (let i = categoriesRendered; i < categoriesRendered + 3; i +=1) {
//     const category = homePage.categories[i];
//     if (category) {
//       category.classList.remove('hidden');
//     }
//   }

//   // Update the counter
//   categoriesRendered += 3;

//   // Observe the new last category

//     observer.observe(homePage.lastCategory);
    
//     for (let i = 3; i < homePage.categories.length; i+=1) {
//       homePage.categories[i].classList.add('hidden');
//     }
// }

