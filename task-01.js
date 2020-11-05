"use strict";

const categoriesRef = document.querySelector("#categories")
const matches =categoriesRef.querySelectorAll('li.item')
console.log(`В списке ${matches.length} категории.`);

matches.forEach((mat) => {
  console.log(`Категория: ${mat.querySelector("h2").innerText}`);
  const lenghtRef = mat.querySelectorAll("ul > li");
  console.log(`Количество элементов: ${lenghtRef.length}`);
});
