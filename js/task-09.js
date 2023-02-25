function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const spanColorRef = document.querySelector(".color");
const changeColorBtnRef = document.querySelector(".change-color");

const getRandomBodyBgColor = () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanColorRef.textContent = getRandomHexColor();
};

changeColorBtnRef.addEventListener("click", getRandomBodyBgColor);
