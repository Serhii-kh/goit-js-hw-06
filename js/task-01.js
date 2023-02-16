const categoriesRef = document.querySelector("#categories");
const numberOfCategories = categoriesRef.children.length;

console.log(`Number of categories: ${numberOfCategories}`);

const titlesRef = document.querySelectorAll("h2");
const elementsInCategory = document.querySelectorAll(".item ul");
const items = document.querySelectorAll('.item');




// // const getTitles = () =>
//   titlesRef.forEach(el => {
//     console.log(`Category: `, el.textContent);
//   });

// // const getNumberOfElements = () =>
//   elementsInCategory.forEach((el) => {
//     console.log(`Elements: `, el.children.length);
//   });

// getTitles();
// getNumberOfElements();


console.log(items);

items.forEach(el => {
	console.log(`Elements: `, el.children.length);
});