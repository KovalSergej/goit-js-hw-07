"use strict";

const inputNameRef = document.querySelector("#name-input");
const nameLabelRef = document.querySelector("#name-output");

inputNameRef.addEventListener("input", handleInputName);

function handleInputName(event) {
nameLabelRef.textContent = event.target.value;
if (event.target.value === ''){
    nameLabelRef.textContent = 'незнакомец';
}
}
