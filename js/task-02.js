const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const listItemRef = document.createElement("li");

  listItemRef.classList.add("item");
  listItemRef.textContent = ingredients[i];

  listRef.appendChild(listItemRef);
}

// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");

// listRef.insertAdjacentHTML("beforeend", markup);

