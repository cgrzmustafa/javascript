// **** Fonksiyona parametre atamak ve geridonus almak ****

// Temel kurallar:
// 1: Bir fonksiyon bir veya birden fazla parametre alabilir veya hiç almayabilir
// 2: Bir fonksiyon dışarı bilgi göderebilir(return) veya göndermeyebilir
// 3:Mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir

let firstName = "Lorem";

function greetings(firstName = "", lastName = "") {
  // default parametre alıyor
  // console.log(`Merhaba ${firstName ? firstName : ""}`);
  console.log(`Merhaba ${firstName}`);
  console.log(`Merhaba ${firstName} ${lastName}`);
}

console.log(firstName); // değişken
greetings(); // fonksiyona parametre göndermedik
greetings("Parametre");

function greetings2(firstName, lastName) {
  let info = `Merhaba ${firstName} ${lastName}`;
  return info;
}

let greetingsInfo = greetings("Ad", "Soyad");
// let info = "deneme" // ????
console.log(greetingsInfo);

function domIdWriteInfo(id, info) {
  let domObject = document.querySelector(`#${id}`);
  domObject.innerHTML = info;
}

let htmlInfo = `<span style="color:red">Color REDDDDDD</span>`;

domIdWriteInfo("greeting", htmlInfo);
