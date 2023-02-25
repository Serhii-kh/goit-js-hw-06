const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

const getRange = () => {
  spanRef.style.fontSize = `${inputRef.value}px`;
};

inputRef.addEventListener("input", getRange);
