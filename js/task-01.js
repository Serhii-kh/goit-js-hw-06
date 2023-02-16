const categoriesRef = document.querySelector("#categories");
const numberOfCategories = categoriesRef.children.length;

console.log(`Number of categories: ${numberOfCategories}`);

const titlesRef = document.querySelectorAll("h2");
const allElemsInCategory = document.querySelectorAll(".item ul");
const numberOfSubCategories = allElemsInCategory.children;

console.log(categoriesRef);

// const getTitles = () =>
//   titlesRef.forEach((el) => {
//     console.log(`Category: `, el.textContent);
//   });

// const getNumberOfElements = () =>
//   allElemsInCategory.forEach((el) => {
//     console.log(`Elements: `, el.children.length);
//   });

// getTitles();
// getNumberOfElements();
