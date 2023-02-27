function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsDivRef = document.querySelector("#controls");
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const inputRef = document.querySelector("input");
const boxesDivRef = document.querySelector("#boxes");
let boxSize = 20;

const destroyBoxes = () => {
  boxesDivRef.innerHTML = "";
  inputRef.value = "";
  boxSize = 20;
};

const createBoxes = () => {
  const amount = Number(inputRef.value);

  for (let i = 1; i <= amount; i += 1) {
    const newDivRef = document.createElement("div");
    boxSize += 10;

    newDivRef.style.backgroundColor = getRandomHexColor();
    newDivRef.style.width = boxSize + `px`;
    newDivRef.style.height = boxSize + `px`;
    newDivRef.style.marginTop = `5px`;

    boxesDivRef.appendChild(newDivRef);
  }
};

createBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);
