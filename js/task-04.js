// let counterValueRef = document.querySelector('#value');
// const decrBtnRef = document.querySelector("[data-action = 'decrement']");
// const incBtnRef = document.querySelector("[data-action = 'increment']");

// console.log(decrBtnRef);
// console.log(incBtnRef);

// decrBtnRef.addEventListener('click', () => {
// 	counterValueRef -= 1;
// 	console.log('klick decBtn');
// });

// incBtnRef.addEventListener('click', () => {
// 	counterValueRef += 1;
// 	console.log('klick incBtn');
// });


// console.log(counterValueRef);

const counterValue = 0;
function increment(){
	counterValue +=1;
  document.getElementById('value').innerHTML = counterValue;
}
function decrement(){
	counterValue -=1;
  document.getElementById('value').innerHTML = counterValue;
}