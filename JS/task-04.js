const btnDct = document.querySelector('[data-action="decrement"]');
const btnInt = document.querySelector('[data-action="increment"]');
const val = document.querySelector("#value");
let counterValue = 0;
const increment = () => (val.textContent = counterValue += 1);
const decrement = () => (val.textContent = counterValue -= 1);
btnDct.addEventListener("click", decrement);
btnInt.addEventListener("click", increment);