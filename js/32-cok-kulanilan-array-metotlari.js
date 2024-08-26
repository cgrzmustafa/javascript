let items = [1, 2, 3, 4, 5];

// Array içinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"];

let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUsers);

items.push(maleUsers);

console.log(items);

console.log(items.length);
console.log(items[0].length); // Array içinde istediğimiz arrayin length bilgisini aldik
console.log(items[0][0]); // Ayse bilgisine ulastik

// Array icerisinden oge ayirmak -> splice(pos item?)
let newItems = items.splice(1, 5);
console.log("newItems: ", newItems);
console.log("items: ", items);

// Array icerisndeki ogenin index bilgisini buılmak -> indexOf('value')
items.unshift("lorem");
items.push("ipsum");

console.log(items.indexOf("ipsum"));

// Array Kopyalamak -> slice, [...ES6]
let copyItems = items;
console.log(items);

copyItems.pop(); // son ogeyi cikarttik
console.log("copyItems", copyItems);
console.log("items", items);

console.log("kopyalandıktan sonraki hali:");
copyItems = items.slice(); // kopyalama yapti
copyItems.pop(); // son ogeyi cikarttik
console.log("copyItems", copyItems);
console.log("items", items);

let es6Items = [...items]; // es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items);

// Ikı array bilgisini birlestirmek -> [...ES6, ...ES6]
let allUsers = [...femaleUsers, ...maleUsers]; // es6 birden fazla array yapisini birlestirmek
console.log(allUsers);

// Array icindeki bilgiyi stringe cevirmek -> toString, join
console.log(allUsers.toString());
console.log(allUsers.join("---"));

// istedigimiz Index bilgisine oge eklemek -> splice(index, 0,  value)
allUsers.splice(allUsers.length - 1, 0, "melisa");
allUsers.splice(Math.floor(allUsers.length / 2), 0, "lorem");
console.log(allUsers);
