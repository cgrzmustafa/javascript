// Menu icin kullanilacak verilerin getirilmesi:
import { menu } from "../js/data.js";

// HTML dosya icerisinde butonlarin ve menunun monte edilecegi kisimlarin elde edilmesi:
const btnContainer = document.querySelector(".btn-container");
const sectionCenter = document.querySelector(".section-center");

//console.log("btnContainer :", btnContainer);
//console.log("sectionCenter :", sectionCenter);

// Catogory butonlari icin kategorilerin data icersinden elde edilmesi

const categories = menu.reduce(
  (values, items) => {
    if (!values.includes(items.category)) {
      values.push(items.category);
    }
    return values;
  },
  ["ALL"]
);

console.log("categories : ", categories);

const btnCategories = categories
  .map((category) => {
    return `<button type="button" class="btn btn-outline-dark btn-item">
            ${category}
          </button>`;
  })
  .join("");

console.log("btnCategories : ", btnCategories);

btnContainer.innerHTML = btnCategories;
