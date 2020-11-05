"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredietsArray = ingredients.map((ingredient) => {
  const ingredRef = document.createElement("li");
  ingredRef.textContent = ingredient;
  return ingredRef;
});
const ingredientsRef = document.querySelector("#ingredients");
ingredientsRef.append(...ingredietsArray);
