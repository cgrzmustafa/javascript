// break ve continue

const LOREM_LIST = [
  "Lorem",
  "dolor",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
];

let counter = 0;

// for (; counter < 10; counter++) {
//   console.log(counter);
//   if (counter === 5) {
//     {
//       break;
//     }
//   }
// }

// for (; counter < 10; counter++) {
//   console.log(counter);
//   if (counter === 5) {
//     {
//       continue;
//     }
//   }
// }

const UL_DOM = document.querySelector("#userList");

let index = 0;

// for (; index < LOREM_LIST.length; index++) {
//   if (LOREM_LIST[index] == "dolor") {
//     break;
//   }
//   let Lİ_DOM = document.createElement("li");
//   Lİ_DOM.innerHTML = LOREM_LIST[index];
//   UL_DOM.append(Lİ_DOM);
// }
// break buraya kadar demek

for (; index < LOREM_LIST.length; index++) {
  if (LOREM_LIST[index] == "dolor") {
    continue;
  }
  let Lİ_DOM = document.createElement("li");
  Lİ_DOM.innerHTML = LOREM_LIST[index];
  UL_DOM.append(Lİ_DOM);
}
// continue bunu atla demek
