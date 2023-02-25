const inputRef = document.querySelector("#validation-input");
const inputLength = Number(inputRef.getAttribute("data-length"));

const inputCheck = (event) => {
  if (inputLength === event.target.value.length) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", inputCheck);
