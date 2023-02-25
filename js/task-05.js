const inputRef = document.querySelector("#name-input");
const outputSpanRef = document.querySelector("#name-output");


const checkInputText = () => {
  inputRef.value === ""
    ? (outputSpanRef.textContent = `Anonymous`)
    : (outputSpanRef.textContent = inputRef.value);
};

inputRef.addEventListener('input', checkInputText);
