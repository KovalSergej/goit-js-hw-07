"use strict";

const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", handleInputQuantity);

function handleInputQuantity(event) {
  if (event.target.value.length === +event.target.dataset.length) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
