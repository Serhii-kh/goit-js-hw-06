const categoriesRef = document.querySelector("#categories");
const numberOfCategories = categoriesRef.children.length;
const subCategoriesRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${numberOfCategories}`);

subCategoriesRef.forEach((el) => {
  console.log(`Category: `, el.firstElementChild.textContent);
  console.log(`Elements: `, el.lastElementChild.children.length);
});
