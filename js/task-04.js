const counterValueRef = document.querySelector("#value");
const decrBtnRef = document.querySelector("[data-action = 'decrement']");
const incrBtnRef = document.querySelector("[data-action = 'increment']");
let counterValue = 0;

decrBtnRef.addEventListener("click", () => {
  counterValue -= 1;
  counterValueRef.innerHTML = counterValue;
});

incrBtnRef.addEventListener("click", () => {
  counterValue += 1;
  counterValueRef.innerHTML = counterValue;
});
