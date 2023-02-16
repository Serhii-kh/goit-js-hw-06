const categoriesRef = document.querySelector('#categories');
const numberOfCategories = categoriesRef.children.length;

console.log(`Number of categories: ${numberOfCategories}`);

const titlesRef = document.querySelectorAll('h2');
const allElemsInCategory = document.querySelectorAll('.item ul')


titlesRef.forEach(el => {
    console.log(el.textContent);
    console.log(`Elements : ${allElemsInCategory.length}`);
 
});




