"use strict";

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

decrementBtn.addEventListener("click", handleDecrement);
incrementBtn.addEventListener("click", handleIncrement);

function handleDecrement(event) {
  counterValue.textContent = +counterValue.textContent - 1;
}
function handleIncrement(event) {
  counterValue.textContent = +counterValue.textContent + 1;
}
