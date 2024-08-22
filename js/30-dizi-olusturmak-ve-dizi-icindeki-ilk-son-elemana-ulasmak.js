// Array olusturmak
let domain = "kodluyoruz";
let isActive = false;
let items = [14, 24, 34, isActive, domain];
console.log(items);

let emptyArray = []; // bos list

// Array içerisindeki eleman/oge sayisini ogrenmmek
console.log(items.length); // array icindeki oge sayisi

// document.querySelector("#info").innerHTML = items.length;

// Array icindeki ilk elemanın cagirilmasi
console.log(items[0]);

// Array icindeki son elemanın cagirilmasi
console.log(items[items.length - 1]);

// Array icindeki ortadaki elemanın cagirilmasi
console.log("ortadaki :", items[Math.floor(items.length / 2)]);

// degisken icindeki bilginin Array olup olmadıgının kontrol edilmesi

console.log(typeof items); // object olarak cikti veriyor

console.log(Array.isArray(items));

// hangileri isArray -> True verir ?

console.log("[] : ", Array.isArray([]));
console.log("10 : ", Array.isArray(10));
console.log("true : ", Array.isArray(true));
