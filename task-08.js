"use strict";

const inputBoxRef = document.querySelector("#controls");
const inputWindowRef = inputBoxRef.querySelector("input");
const boxesRenderBtnRef = inputBoxRef.querySelector('button[data-action="render"]');
const boxesDestroyBtnRef = inputBoxRef.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector("#boxes");

const widthHeight = 30;

boxesRenderBtnRef.addEventListener("click", createBoxes);
boxesDestroyBtnRef.addEventListener("click", destroyBoxes);

function createBoxes() {
  let widthHeightLocal = widthHeight;

  for (let i = inputWindowRef.value; i > 0; i--) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style = `background-color: #${(Math.random().toString(16) + "000000")
      .substring(2, 8)
      .toUpperCase()}; 
      width: ${widthHeightLocal}px; 
      height: ${widthHeightLocal}px;`;
      widthHeightLocal += 10;
    boxesRef.appendChild(div);
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}
