// Array forEach metodu

const PRODUCTS = [
  "Laptop",
  "Phone",
  "Speaker",
  "Desktop PC",
  "Server",
  "Mouse",
  "Keyboard",
];

// PRODUCTS.forEach((product, index, array) => (array[index] = product + " 111"));

PRODUCTS.forEach(
  (product, index, array) => (array[index] = `${product.toUpperCase()}`)
);

console.log(PRODUCTS);

// const userListDOM = document.querySelector("#userList");

// for (index = 0; index < LOREM_LIST.length; index++) {
//   if (LOREM_LIST[index] == "dolor") {
//     continue;
//   }
//   let Lİ_DOM = document.createElement("li");
//   Lİ_DOM.innerHTML = LOREM_LIST[index];
//   UL_DOM.append(Lİ_DOM);
// }

const userListDOM = document.querySelector("#userList");

PRODUCTS.forEach((item) => {
  const liDOM = document.createElement("li");
  liDOM.innerHTML = item;
  userListDOM.append(liDOM);
});
