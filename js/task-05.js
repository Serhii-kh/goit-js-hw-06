const inputRef = document.querySelector("#name-input");
const outputSpanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  outputSpanRef.textContent = event.currentTarget.value;
});
