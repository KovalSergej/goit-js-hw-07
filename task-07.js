"use strict";

const fontSizeRef = document.querySelector("#font-size-control");
const scaledTextRef = document.querySelector("#text");

fontSizeRef.addEventListener("input", handleTextSize);

function handleTextSize(event) {
  scaledTextRef.setAttribute("style", `font-size:${event.target.value}px`);
}
